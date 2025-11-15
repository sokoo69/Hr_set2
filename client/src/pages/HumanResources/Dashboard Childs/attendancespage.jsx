import { ListWrapper } from "../../../components/common/Dashboard/ListDesigns"
import { HeadingBar } from "../../../components/common/Dashboard/ListDesigns"
import { useEffect, useMemo, memo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Loading } from "../../../components/common/loading.jsx"
import { ListItems } from "../../../components/common/Dashboard/ListDesigns"
import { ListContainer } from "../../../components/common/Dashboard/ListDesigns"
import { HandleGetAllAttendances } from "../../../redux/Thunks/AttendanceThunk.js"
import { MarkAttendanceDialogBox } from "../../../components/common/Dashboard/dialogboxes.jsx"

// Memoized Attendance Row Component
const AttendanceRow = memo(({ attendance }) => {
    const lastLogDate = useMemo(() => {
        if (attendance.attendancelog && attendance.attendancelog.length > 0) {
            return new Date(attendance.attendancelog[attendance.attendancelog.length - 1].logdate).toLocaleDateString()
        }
        return "N/A"
    }, [attendance.attendancelog])

    return (
        <div className="grid grid-cols-7 gap-4 p-3 border-b border-gray-200 hover:bg-gray-50">
            <div className="flex items-center">
                <span className="text-sm font-medium">
                    {attendance.employee?.firstname} {attendance.employee?.lastname}
                </span>
            </div>
            <div className="flex items-center">
                <span className="text-sm text-gray-600">{lastLogDate}</span>
            </div>
            <div className="flex items-center">
                <span className="text-sm">-</span>
            </div>
            <div className="flex items-center">
                <span className="text-sm">-</span>
            </div>
            <div className="flex items-center">
                <span className="text-sm">-</span>
            </div>
            <div className="flex items-center">
                <span className="text-sm">{attendance.status || "Not Specified"}</span>
            </div>
            <div className="flex items-center gap-2">
                <button className="text-blue-600 hover:text-blue-800">View</button>
                <button className="text-red-600 hover:text-red-800">Delete</button>
            </div>
        </div>
    )
})

AttendanceRow.displayName = "AttendanceRow"

export const HRAttendancesPage = () => {
    const dispatch = useDispatch()
    const AttendancesState = useSelector((state) => state.AttendancesReducer || { 
        isLoading: false, 
        data: [],
        error: { status: false, message: "", content: null },
        fetchData: false
    })
    
    const table_headings = useMemo(() => ["Employee Name", "Date", "Check In", "Check Out", "Hours Worked", "Status", "Actions"], [])

    useEffect(() => {
        dispatch(HandleGetAllAttendances())
    }, [dispatch])

    useEffect(() => {
        if (AttendancesState.fetchData) {
            dispatch(HandleGetAllAttendances())
        }
    }, [AttendancesState.fetchData, dispatch])

    const hasError = useMemo(() => AttendancesState.error?.status || false, [AttendancesState.error?.status])
    const hasData = useMemo(() => AttendancesState.data && AttendancesState.data.length > 0, [AttendancesState.data])

    if (AttendancesState.isLoading) {
        return (
            <Loading />
        )
    }

    return (
        <div className="attendances-content w-full mx-auto my-10 flex flex-col gap-5 h-[94%]">
            <div className="attendances-header flex justify-between items-center">
                <h1 className="min-[250px]:text-xl md:text-4xl font-bold">Attendances</h1>
                <div className="attendances-actions">
                    <MarkAttendanceDialogBox />
                </div>
            </div>
            <div className="attendances-data flex flex-col gap-4 md:pe-5 overflow-auto">
                <ListWrapper>
                    <HeadingBar table_layout={"grid-cols-7"} table_headings={table_headings} />
                </ListWrapper>
                <ListContainer>
                    {hasError ? (
                        <div className="flex items-center justify-center h-64 text-red-600">
                            <p>Error: {AttendancesState.error?.message || "Failed to load attendances"}</p>
                        </div>
                    ) : hasData ? (
                        AttendancesState.data.map((attendance) => (
                            <AttendanceRow key={attendance._id} attendance={attendance} />
                        ))
                    ) : (
                        <div className="flex items-center justify-center h-64 text-muted-foreground">
                            <p>No attendance data available yet</p>
                        </div>
                    )}
                </ListContainer>
            </div>
        </div>
    )
}
