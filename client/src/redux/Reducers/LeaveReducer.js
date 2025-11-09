import { createSlice } from "@reduxjs/toolkit";
import { HandleGetAllLeaves, HandleCreateLeave, HandleUpdateLeave, HandleDeleteLeave } from "../Thunks/LeaveThunk";

const LeaveSlice = createSlice({
    name: 'leave',
    initialState: {
        data: [],
        isLoading: false,
        error: {
            status: false,
            message: null,
            content: null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(HandleGetAllLeaves.pending, (state) => {
                state.isLoading = true;
                state.error = { status: false, message: null, content: null };
            })
            .addCase(HandleGetAllLeaves.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload?.data || action.payload || [];
                state.error = { status: false, message: null, content: null };
            })
            .addCase(HandleGetAllLeaves.rejected, (state, action) => {
                state.isLoading = false;
                state.error = {
                    status: true,
                    message: action.payload?.message || "Failed to fetch leaves",
                    content: action.payload
                };
            })
            .addCase(HandleCreateLeave.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(HandleCreateLeave.fulfilled, (state, action) => {
                state.isLoading = false;
                if (action.payload?.data) {
                    state.data.push(action.payload.data);
                }
                state.error = { status: false, message: null, content: null };
            })
            .addCase(HandleCreateLeave.rejected, (state, action) => {
                state.isLoading = false;
                state.error = {
                    status: true,
                    message: action.payload?.message || "Failed to create leave",
                    content: action.payload
                };
            })
            .addCase(HandleUpdateLeave.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(HandleUpdateLeave.fulfilled, (state, action) => {
                state.isLoading = false;
                if (action.payload?.data) {
                    const index = state.data.findIndex(leave => leave._id === action.payload.data._id);
                    if (index !== -1) {
                        state.data[index] = action.payload.data;
                    }
                }
                state.error = { status: false, message: null, content: null };
            })
            .addCase(HandleUpdateLeave.rejected, (state, action) => {
                state.isLoading = false;
                state.error = {
                    status: true,
                    message: action.payload?.message || "Failed to update leave",
                    content: action.payload
                };
            })
            .addCase(HandleDeleteLeave.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(HandleDeleteLeave.fulfilled, (state, action) => {
                state.isLoading = false;
                const deletedId = action.payload?.data?._id || action.payload?._id;
                if (deletedId) {
                    state.data = state.data.filter(leave => leave._id !== deletedId);
                }
                state.error = { status: false, message: null, content: null };
            })
            .addCase(HandleDeleteLeave.rejected, (state, action) => {
                state.isLoading = false;
                state.error = {
                    status: true,
                    message: action.payload?.message || "Failed to delete leave",
                    content: action.payload
                };
            });
    }
})

export default LeaveSlice.reducer

