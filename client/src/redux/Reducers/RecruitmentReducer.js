import { createSlice } from "@reduxjs/toolkit";
import { HandleGetAllRecruitments, HandleCreateRecruitment, HandleGetRecruitment, HandleUpdateRecruitment, HandleDeleteRecruitment } from "../Thunks/RecruitmentThunk";

const initialState = {
    data: [],
    currentRecruitment: null,
    isLoading: false,
    error: {
        status: false,
        message: "",
        content: null
    },
    fetchData: false
}

const RecruitmentSlice = createSlice({
    name: "RecruitmentReducer",
    initialState,
    reducers: {
        clearRecruitmentError: (state) => {
            state.error = {
                status: false,
                message: "",
                content: null
            }
        },
        clearCurrentRecruitment: (state) => {
            state.currentRecruitment = null
        }
    },
    extraReducers: (builder) => {
        builder
            // Get All Recruitments
            .addCase(HandleGetAllRecruitments.pending, (state) => {
                state.isLoading = true
                state.error = {
                    status: false,
                    message: "",
                    content: null
                }
            })
            .addCase(HandleGetAllRecruitments.fulfilled, (state, action) => {
                state.isLoading = false
                state.data = action.payload.data || []
                state.error = {
                    status: false,
                    message: "",
                    content: null
                }
                state.fetchData = false
            })
            .addCase(HandleGetAllRecruitments.rejected, (state, action) => {
                state.isLoading = false
                state.error = {
                    status: true,
                    message: action.payload?.message || action.error?.message || "Failed to load recruitments",
                    content: action.payload || { message: state.error.message }
                }
                state.fetchData = false
            })
            // Create Recruitment
            .addCase(HandleCreateRecruitment.pending, (state) => {
                state.isLoading = true
                state.error = {
                    status: false,
                    message: "",
                    content: null
                }
            })
            .addCase(HandleCreateRecruitment.fulfilled, (state, action) => {
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
            .addCase(HandleCreateRecruitment.rejected, (state, action) => {
                state.isLoading = false
                state.error = {
                    status: true,
                    message: action.payload?.message || action.error?.message || "Failed to create recruitment",
                    content: action.payload || { message: state.error.message }
                }
            })
            // Get Single Recruitment
            .addCase(HandleGetRecruitment.pending, (state) => {
                state.isLoading = true
                state.error = {
                    status: false,
                    message: "",
                    content: null
                }
            })
            .addCase(HandleGetRecruitment.fulfilled, (state, action) => {
                state.isLoading = false
                state.currentRecruitment = action.payload.data
                state.error = {
                    status: false,
                    message: "",
                    content: null
                }
            })
            .addCase(HandleGetRecruitment.rejected, (state, action) => {
                state.isLoading = false
                state.error = {
                    status: true,
                    message: action.payload?.message || action.error?.message || "Failed to fetch recruitment",
                    content: action.payload || { message: state.error.message }
                }
            })
            // Update Recruitment
            .addCase(HandleUpdateRecruitment.pending, (state) => {
                state.isLoading = true
                state.error = {
                    status: false,
                    message: "",
                    content: null
                }
            })
            .addCase(HandleUpdateRecruitment.fulfilled, (state, action) => {
                state.isLoading = false
                const updatedRecruitment = action.payload.data
                const index = state.data.findIndex(recruitment => recruitment._id === updatedRecruitment._id)
                if (index !== -1) {
                    state.data[index] = updatedRecruitment
                }
                state.error = {
                    status: false,
                    message: "",
                    content: null
                }
                state.fetchData = true
            })
            .addCase(HandleUpdateRecruitment.rejected, (state, action) => {
                state.isLoading = false
                state.error = {
                    status: true,
                    message: action.payload?.message || action.error?.message || "Failed to update recruitment",
                    content: action.payload || { message: state.error.message }
                }
            })
            // Delete Recruitment
            .addCase(HandleDeleteRecruitment.pending, (state) => {
                state.isLoading = true
                state.error = {
                    status: false,
                    message: "",
                    content: null
                }
            })
            .addCase(HandleDeleteRecruitment.fulfilled, (state, action) => {
                state.isLoading = false
                const deletedRecruitmentId = action.payload.data?._id || action.payload._id
                if (deletedRecruitmentId) {
                    state.data = state.data.filter(recruitment => recruitment._id !== deletedRecruitmentId)
                }
                state.error = {
                    status: false,
                    message: "",
                    content: null
                }
                state.fetchData = true
            })
            .addCase(HandleDeleteRecruitment.rejected, (state, action) => {
                state.isLoading = false
                state.error = {
                    status: true,
                    message: action.payload?.message || action.error?.message || "Failed to delete recruitment",
                    content: action.payload || { message: state.error.message }
                }
            })
    }
})

export const { clearRecruitmentError, clearCurrentRecruitment } = RecruitmentSlice.actions
export default RecruitmentSlice.reducer

