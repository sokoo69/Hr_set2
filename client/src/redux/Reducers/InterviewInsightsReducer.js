import { createSlice } from "@reduxjs/toolkit";
import { HandleGetAllInterviews, HandleCreateInterview, HandleGetInterview, HandleUpdateInterview, HandleDeleteInterview } from "../Thunks/InterviewInsightsThunk";

const initialState = {
    data: [],
    currentInterview: null,
    isLoading: false,
    error: {
        status: false,
        message: "",
        content: null
    },
    fetchData: false
}

const InterviewInsightsSlice = createSlice({
    name: "InterviewInsightsReducer",
    initialState,
    reducers: {
        clearInterviewError: (state) => {
            state.error = {
                status: false,
                message: "",
                content: null
            }
        },
        clearCurrentInterview: (state) => {
            state.currentInterview = null
        }
    },
    extraReducers: (builder) => {
        builder
            // Get All Interviews
            .addCase(HandleGetAllInterviews.pending, (state) => {
                state.isLoading = true
                state.error = {
                    status: false,
                    message: "",
                    content: null
                }
            })
            .addCase(HandleGetAllInterviews.fulfilled, (state, action) => {
                state.isLoading = false
                state.data = action.payload.data || []
                state.error = {
                    status: false,
                    message: "",
                    content: null
                }
                state.fetchData = false
            })
            .addCase(HandleGetAllInterviews.rejected, (state, action) => {
                state.isLoading = false
                state.error = {
                    status: true,
                    message: action.payload?.message || action.error?.message || "Failed to load interviews",
                    content: action.payload || { message: state.error.message }
                }
                state.fetchData = false
            })
            // Create Interview
            .addCase(HandleCreateInterview.pending, (state) => {
                state.isLoading = true
                state.error = {
                    status: false,
                    message: "",
                    content: null
                }
            })
            .addCase(HandleCreateInterview.fulfilled, (state, action) => {
                state.isLoading = false
                if (action.payload.data) {
                    state.data.push(action.payload.data)
                }
                state.error = {
                    status: false,
                    message: "",
                    content: null
                }
                state.fetchData = true
            })
            .addCase(HandleCreateInterview.rejected, (state, action) => {
                state.isLoading = false
                state.error = {
                    status: true,
                    message: action.payload?.message || action.error?.message || "Failed to create interview",
                    content: action.payload || { message: state.error.message }
                }
            })
            // Get Single Interview
            .addCase(HandleGetInterview.pending, (state) => {
                state.isLoading = true
                state.error = {
                    status: false,
                    message: "",
                    content: null
                }
            })
            .addCase(HandleGetInterview.fulfilled, (state, action) => {
                state.isLoading = false
                state.currentInterview = action.payload.data
                state.error = {
                    status: false,
                    message: "",
                    content: null
                }
            })
            .addCase(HandleGetInterview.rejected, (state, action) => {
                state.isLoading = false
                state.error = {
                    status: true,
                    message: action.payload?.message || action.error?.message || "Failed to fetch interview",
                    content: action.payload || { message: state.error.message }
                }
            })
            // Update Interview
            .addCase(HandleUpdateInterview.pending, (state) => {
                state.isLoading = true
                state.error = {
                    status: false,
                    message: "",
                    content: null
                }
            })
            .addCase(HandleUpdateInterview.fulfilled, (state, action) => {
                state.isLoading = false
                const updatedInterview = action.payload.data
                const index = state.data.findIndex(interview => interview._id === updatedInterview._id)
                if (index !== -1) {
                    state.data[index] = updatedInterview
                }
                state.error = {
                    status: false,
                    message: "",
                    content: null
                }
                state.fetchData = true
            })
            .addCase(HandleUpdateInterview.rejected, (state, action) => {
                state.isLoading = false
                state.error = {
                    status: true,
                    message: action.payload?.message || action.error?.message || "Failed to update interview",
                    content: action.payload || { message: state.error.message }
                }
            })
            // Delete Interview
            .addCase(HandleDeleteInterview.pending, (state) => {
                state.isLoading = true
                state.error = {
                    status: false,
                    message: "",
                    content: null
                }
            })
            .addCase(HandleDeleteInterview.fulfilled, (state, action) => {
                state.isLoading = false
                const deletedInterviewId = action.payload.data?._id || action.payload._id
                if (deletedInterviewId) {
                    state.data = state.data.filter(interview => interview._id !== deletedInterviewId)
                }
                state.error = {
                    status: false,
                    message: "",
                    content: null
                }
                state.fetchData = true
            })
            .addCase(HandleDeleteInterview.rejected, (state, action) => {
                state.isLoading = false
                state.error = {
                    status: true,
                    message: action.payload?.message || action.error?.message || "Failed to delete interview",
                    content: action.payload || { message: state.error.message }
                }
            })
    }
})

export const { clearInterviewError, clearCurrentInterview } = InterviewInsightsSlice.actions
export default InterviewInsightsSlice.reducer

