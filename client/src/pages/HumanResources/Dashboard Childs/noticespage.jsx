import { ListWrapper } from "../../../components/common/Dashboard/ListDesigns"
import { HeadingBar } from "../../../components/common/Dashboard/ListDesigns"
import { useEffect, useMemo, memo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Loading } from "../../../components/common/loading.jsx"
import { ListItems } from "../../../components/common/Dashboard/ListDesigns"
import { ListContainer } from "../../../components/common/Dashboard/ListDesigns"
import { CreateNoticeDialogBox } from "../../../components/common/Dashboard/dialogboxes.jsx"
import { HandleGetAllNotices } from "../../../redux/Thunks/NoticeThunk.js"

// Memoized Notice Row Component
const NoticeRow = memo(({ notice, type }) => {
    const createdDate = useMemo(() => {
        return new Date(notice.createdAt).toLocaleDateString()
    }, [notice.createdAt])

    const contentPreview = useMemo(() => {
        return notice.content?.substring(0, 50) || ""
    }, [notice.content])

    return (
        <div className="grid grid-cols-6 gap-4 p-3 border-b border-gray-200 hover:bg-gray-50">
            <div className="flex items-center">{notice.title}</div>
            <div className="flex items-center text-sm text-gray-600">{contentPreview}...</div>
            <div className="flex items-center">{type}</div>
            <div className="flex items-center text-sm">{createdDate}</div>
            <div className="flex items-center">Active</div>
            <div className="flex items-center gap-2">
                <button className="text-blue-600 hover:text-blue-800">View</button>
                <button className="text-red-600 hover:text-red-800">Delete</button>
            </div>
        </div>
    )
})

NoticeRow.displayName = "NoticeRow"

export const HRNoticesPage = () => {
    const dispatch = useDispatch()
    const NoticesState = useSelector((state) => state.NoticesReducer || { 
        isLoading: false, 
        data: { department_notices: [], employee_notices: [] },
        error: { status: false, message: "", content: null },
        fetchData: false,
        success: false
    })
    const table_headings = useMemo(() => ["Title", "Content", "Priority", "Created Date", "Status", "Actions"], [])

    useEffect(() => {
        dispatch(HandleGetAllNotices())
    }, [dispatch])

    useEffect(() => {
        if (NoticesState.fetchData) {
            dispatch(HandleGetAllNotices())
        }
    }, [NoticesState.fetchData, dispatch])

    // Show loading only on initial load
    const hasData = useMemo(() => NoticesState.data && (
        (NoticesState.data.department_notices && NoticesState.data.department_notices.length > 0) ||
        (NoticesState.data.employee_notices && NoticesState.data.employee_notices.length > 0)
    ), [NoticesState.data])
    
    const hasError = useMemo(() => NoticesState.error?.status || false, [NoticesState.error?.status])
    
    if (NoticesState.isLoading && !hasData && !hasError) {
        return (
            <Loading />
        )
    }

    return (
        <div className="notices-content w-full mx-auto my-10 flex flex-col gap-5 h-[94%]">
            <div className="notices-header flex justify-between items-center">
                <h1 className="min-[250px]:text-xl md:text-4xl font-bold">Issue Notices</h1>
                <div className="notices-actions">
                    <CreateNoticeDialogBox />
                </div>
            </div>
            <div className="notices-data flex flex-col gap-4 md:pe-5 overflow-auto">
                <ListWrapper>
                    <HeadingBar table_layout={"grid-cols-6"} table_headings={table_headings} />
                </ListWrapper>
                <ListContainer>
                    {hasError ? (
                        <div className="flex items-center justify-center h-64 text-red-600">
                            <p>Error: {NoticesState.error?.message || "Failed to load notices"}</p>
                        </div>
                    ) : hasData ? (
                        <>
                            {NoticesState.data.department_notices?.map((notice) => (
                                <NoticeRow key={notice._id} notice={notice} type="Department" />
                            ))}
                            {NoticesState.data.employee_notices?.map((notice) => (
                                <NoticeRow key={notice._id} notice={notice} type="Employee" />
                            ))}
                        </>
                    ) : (
                        <div className="flex items-center justify-center h-64 text-muted-foreground">
                            <p>No notices available yet</p>
                        </div>
                    )}
                </ListContainer>
            </div>
        </div>
    )
}
