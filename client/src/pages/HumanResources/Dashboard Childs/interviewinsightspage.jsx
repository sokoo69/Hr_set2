import { ListWrapper } from "../../../components/common/Dashboard/ListDesigns"
import { HeadingBar } from "../../../components/common/Dashboard/ListDesigns"
import { useEffect, useMemo, memo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Loading } from "../../../components/common/loading.jsx"
import { ListItems } from "../../../components/common/Dashboard/ListDesigns"
import { ListContainer } from "../../../components/common/Dashboard/ListDesigns"
import { HandleGetAllInterviews } from "../../../redux/Thunks/InterviewInsightsThunk.js"
import { GenerateReportDialogBox } from "../../../components/common/Dashboard/dialogboxes.jsx"

// Memoized Interview Row Component
const InterviewRow = memo(({ interview }) => {
    const interviewDate = useMemo(() => {
        return interview.interviewdate ? new Date(interview.interviewdate).toLocaleDateString() : "N/A"
    }, [interview.interviewdate])

    const candidateName = useMemo(() => {
        return `${interview.applicant?.firstname || ""} ${interview.applicant?.lastname || ""}`
    }, [interview.applicant?.firstname, interview.applicant?.lastname])

    const feedbackPreview = useMemo(() => {
        return interview.feedback?.substring(0, 30) || "No feedback"
    }, [interview.feedback])

    return (
        <div className="grid grid-cols-7 gap-4 p-3 border-b border-gray-200 hover:bg-gray-50">
            <div className="flex items-center">
                <span className="text-sm font-medium">{candidateName}</span>
            </div>
            <div className="flex items-center">
                <span className="text-sm text-gray-600">{interview.applicant?.appliedrole || "N/A"}</span>
            </div>
            <div className="flex items-center">
                <span className="text-sm">{interviewDate}</span>
            </div>
            <div className="flex items-center">
                <span className="text-sm">{interview.status || "Pending"}</span>
            </div>
            <div className="flex items-center">
                <span className="text-sm">{interview.score || "N/A"}</span>
            </div>
            <div className="flex items-center">
                <span className="text-sm text-gray-600">{feedbackPreview}...</span>
            </div>
            <div className="flex items-center gap-2">
                <button className="text-blue-600 hover:text-blue-800">View</button>
                <button className="text-red-600 hover:text-red-800">Delete</button>
            </div>
        </div>
    )
})

InterviewRow.displayName = "InterviewRow"

export const HRInterviewInsightsPage = () => {
    const dispatch = useDispatch()
    const InterviewInsightsState = useSelector((state) => state.InterviewInsightsReducer || { 
        isLoading: false, 
        data: [],
        error: { status: false, message: "", content: null },
        fetchData: false
    })
    
    const table_headings = useMemo(() => ["Candidate Name", "Position", "Interview Date", "Status", "Score", "Feedback", "Actions"], [])

    useEffect(() => {
        dispatch(HandleGetAllInterviews())
    }, [dispatch])

    useEffect(() => {
        if (InterviewInsightsState.fetchData) {
            dispatch(HandleGetAllInterviews())
        }
    }, [InterviewInsightsState.fetchData, dispatch])

    const hasError = useMemo(() => InterviewInsightsState.error?.status || false, [InterviewInsightsState.error?.status])
    const hasData = useMemo(() => InterviewInsightsState.data && InterviewInsightsState.data.length > 0, [InterviewInsightsState.data])

    if (InterviewInsightsState.isLoading) {
        return (
            <Loading />
        )
    }

    return (
        <div className="interview-insights-content w-full mx-auto my-10 flex flex-col gap-5 h-[94%]">
            <div className="insights-header flex justify-between items-center">
                <h1 className="min-[250px]:text-xl md:text-4xl font-bold">Interview Insights</h1>
                <div className="insights-actions">
                    <GenerateReportDialogBox />
                </div>
            </div>
            <div className="insights-data flex flex-col gap-4 md:pe-5 overflow-auto">
                <ListWrapper>
                    <HeadingBar table_layout={"grid-cols-7"} table_headings={table_headings} />
                </ListWrapper>
                <ListContainer>
                    {hasError ? (
                        <div className="flex items-center justify-center h-64 text-red-600">
                            <p>Error: {InterviewInsightsState.error?.message || "Failed to load interviews"}</p>
                        </div>
                    ) : hasData ? (
                        InterviewInsightsState.data.map((interview) => (
                            <InterviewRow key={interview._id} interview={interview} />
                        ))
                    ) : (
                        <div className="flex items-center justify-center h-64 text-muted-foreground">
                            <p>No interview data available yet</p>
                        </div>
                    )}
                </ListContainer>
            </div>
        </div>
    )
}
