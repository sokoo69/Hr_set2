import { createSlice } from "@reduxjs/toolkit";
import { HandleGetAllAttendances, HandleInitializeAttendance, HandleGetAttendance, HandleUpdateAttendance, HandleDeleteAttendance } from "../Thunks/AttendanceThunk";

const initialState = {
    data: [],
    currentAttendance: null,
    isLoading: false,
    error: {
        status: false,
        message: "",
        content: null
    },
    fetchData: false
}

const AttendanceSlice = createSlice({
    name: "AttendanceReducer",
    initialState,
    reducers: {
        clearAttendanceError: (state) => {
            state.error = {
                status: false,
                message: "",
                content: null
            }
        },
        clearCurrentAttendance: (state) => {
            state.currentAttendance = null
        }
    },
    extraReducers: (builder) => {
        builder
            // Get All Attendances
            .addCase(HandleGetAllAttendances.pending, (state) => {
                state.isLoading = true
                state.error = {
                    status: false,
                    message: "",
                    content: null
                }
            })
            .addCase(HandleGetAllAttendances.fulfilled, (state, action) => {
                state.isLoading = false
                state.data = action.payload.data || []
                state.error = {
                    status: false,
                    message: "",
                    content: null
                }
                state.fetchData = false
            })
            .addCase(HandleGetAllAttendances.rejected, (state, action) => {
                state.isLoading = false
                state.error = {
                    status: true,
                    message: action.payload?.message || action.error?.message || "Failed to load attendances",
                    content: action.payload || { message: state.error.message }
                }
                state.fetchData = false
            })
            // Initialize Attendance
            .addCase(HandleInitializeAttendance.pending, (state) => {
                state.isLoading = true
                state.error = {
                    status: false,
                    message: "",
                    content: null
                }
            })
            .addCase(HandleInitializeAttendance.fulfilled, (state, action) => {
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
            .addCase(HandleInitializeAttendance.rejected, (state, action) => {
                state.isLoading = false
                state.error = {
                    status: true,
                    message: action.payload?.message || action.error?.message || "Failed to initialize attendance",
                    content: action.payload || { message: state.error.message }
                }
            })
            // Get Single Attendance
            .addCase(HandleGetAttendance.pending, (state) => {
                state.isLoading = true
                state.error = {
                    status: false,
                    message: "",
                    content: null
                }
            })
            .addCase(HandleGetAttendance.fulfilled, (state, action) => {
                state.isLoading = false
                state.currentAttendance = action.payload.data
                state.error = {
                    status: false,
                    message: "",
                    content: null
                }
            })
            .addCase(HandleGetAttendance.rejected, (state, action) => {
                state.isLoading = false
                state.error = {
                    status: true,
                    message: action.payload?.message || action.error?.message || "Failed to fetch attendance",
                    content: action.payload || { message: state.error.message }
                }
            })
            // Update Attendance
            .addCase(HandleUpdateAttendance.pending, (state) => {
                state.isLoading = true
                state.error = {
                    status: false,
                    message: "",
                    content: null
                }
            })
            .addCase(HandleUpdateAttendance.fulfilled, (state, action) => {
                state.isLoading = false
                const updatedAttendance = action.payload.data
                const index = state.data.findIndex(attendance => attendance._id === updatedAttendance._id)
                if (index !== -1) {
                    state.data[index] = updatedAttendance
                }
                state.error = {
                    status: false,
                    message: "",
                    content: null
                }
                state.fetchData = true
            })
            .addCase(HandleUpdateAttendance.rejected, (state, action) => {
                state.isLoading = false
                state.error = {
                    status: true,
                    message: action.payload?.message || action.error?.message || "Failed to update attendance",
                    content: action.payload || { message: state.error.message }
                }
            })
            // Delete Attendance
            .addCase(HandleDeleteAttendance.pending, (state) => {
                state.isLoading = true
                state.error = {
                    status: false,
                    message: "",
                    content: null
                }
            })
            .addCase(HandleDeleteAttendance.fulfilled, (state, action) => {
                state.isLoading = false
                const deletedAttendanceId = action.payload.data?._id || action.payload._id
                if (deletedAttendanceId) {
                    state.data = state.data.filter(attendance => attendance._id !== deletedAttendanceId)
                }
                state.error = {
                    status: false,
                    message: "",
                    content: null
                }
                state.fetchData = true
            })
            .addCase(HandleDeleteAttendance.rejected, (state, action) => {
                state.isLoading = false
                state.error = {
                    status: true,
                    message: action.payload?.message || action.error?.message || "Failed to delete attendance",
                    content: action.payload || { message: state.error.message }
                }
            })
    }
})

export const { clearAttendanceError, clearCurrentAttendance } = AttendanceSlice.actions
export default AttendanceSlice.reducer

