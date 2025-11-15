import { ListWrapper } from "../../../components/common/Dashboard/ListDesigns"
import { HeadingBar } from "../../../components/common/Dashboard/ListDesigns"
import { useEffect, useMemo, memo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Loading } from "../../../components/common/loading.jsx"
import { ListItems } from "../../../components/common/Dashboard/ListDesigns"
import { ListContainer } from "../../../components/common/Dashboard/ListDesigns"
import { HandleGetAllRecruitments } from "../../../redux/Thunks/RecruitmentThunk.js"
import { PostJobDialogBox } from "../../../components/common/Dashboard/dialogboxes.jsx"

// Memoized Recruitment Row Component
const RecruitmentRow = memo(({ recruitment }) => {
    const postedDate = useMemo(() => {
        return new Date(recruitment.createdAt).toLocaleDateString()
    }, [recruitment.createdAt])

    return (
        <div className="grid grid-cols-6 gap-4 p-3 border-b border-gray-200 hover:bg-gray-50">
            <div className="flex items-center">
                <span className="text-sm font-medium">{recruitment.jobtitle}</span>
            </div>
            <div className="flex items-center">
                <span className="text-sm text-gray-600">{recruitment.department?.name || "N/A"}</span>
            </div>
            <div className="flex items-center">
                <span className="text-sm">{recruitment.application?.length || 0} applicants</span>
            </div>
            <div className="flex items-center">
                <span className="text-sm">{recruitment.status || "Active"}</span>
            </div>
            <div className="flex items-center">
                <span className="text-sm">{postedDate}</span>
            </div>
            <div className="flex items-center gap-2">
                <button className="text-blue-600 hover:text-blue-800">View</button>
                <button className="text-red-600 hover:text-red-800">Delete</button>
            </div>
        </div>
    )
})

RecruitmentRow.displayName = "RecruitmentRow"

export const HRRecruitmentPage = () => {
    const dispatch = useDispatch()
    const RecruitmentState = useSelector((state) => state.RecruitmentReducer || { 
        isLoading: false, 
        data: [],
        error: { status: false, message: "", content: null },
        fetchData: false
    })
    
    const table_headings = useMemo(() => ["Job Title", "Department", "Applicants", "Status", "Posted Date", "Actions"], [])

    useEffect(() => {
        dispatch(HandleGetAllRecruitments())
    }, [dispatch])

    useEffect(() => {
        if (RecruitmentState.fetchData) {
            dispatch(HandleGetAllRecruitments())
        }
    }, [RecruitmentState.fetchData, dispatch])

    const hasError = useMemo(() => RecruitmentState.error?.status || false, [RecruitmentState.error?.status])
    const hasData = useMemo(() => RecruitmentState.data && RecruitmentState.data.length > 0, [RecruitmentState.data])

    if (RecruitmentState.isLoading) {
        return (
            <Loading />
        )
    }

    return (
        <div className="recruitment-content w-full mx-auto my-10 flex flex-col gap-5 h-[94%]">
            <div className="recruitment-header flex justify-between items-center">
                <h1 className="min-[250px]:text-xl md:text-4xl font-bold">Recruitment</h1>
                <div className="recruitment-actions">
                    <PostJobDialogBox />
                </div>
            </div>
            <div className="recruitment-data flex flex-col gap-4 md:pe-5 overflow-auto">
                <ListWrapper>
                    <HeadingBar table_layout={"grid-cols-6"} table_headings={table_headings} />
                </ListWrapper>
                <ListContainer>
                    {hasError ? (
                        <div className="flex items-center justify-center h-64 text-red-600">
                            <p>Error: {RecruitmentState.error?.message || "Failed to load recruitments"}</p>
                        </div>
                    ) : hasData ? (
                        RecruitmentState.data.map((recruitment) => (
                            <RecruitmentRow key={recruitment._id} recruitment={recruitment} />
                        ))
                    ) : (
                        <div className="flex items-center justify-center h-64 text-muted-foreground">
                            <p>No recruitment data available yet</p>
                        </div>
                    )}
                </ListContainer>
            </div>
        </div>
    )
}
