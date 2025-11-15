import { createSlice } from "@reduxjs/toolkit";
import { HandleGetAllNotices, HandleCreateNotice, HandleGetNotice, HandleUpdateNotice, HandleDeleteNotice } from "../Thunks/NoticeThunk";

const initialState = {
    isLoading: false,
    data: {
        department_notices: [],
        employee_notices: []
    },
    error: {
        status: false,
        message: "",
        content: null
    },
    success: false,
    fetchData: false
};

export const NoticeSlice = createSlice({
    name: "Notice",
    initialState,
    reducers: {
        clearNoticeError: (state) => {
            state.error.status = false;
            state.error.message = "";
            state.error.content = null;
        },
        resetNoticeState: (state) => {
            state.fetchData = false;
            state.success = false;
        }
    },
    extraReducers: (builder) => {
        // Get All Notices
        builder.addCase(HandleGetAllNotices.pending, (state) => {
            state.isLoading = true;
            state.error.content = null;
        });
        builder.addCase(HandleGetAllNotices.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error.status = false;
            state.data = action.payload.data || { department_notices: [], employee_notices: [] };
            state.success = action.payload.success;
            state.fetchData = false; // Reset fetchData after successful fetch
        });
        builder.addCase(HandleGetAllNotices.rejected, (state, action) => {
            state.isLoading = false;
            state.error.status = true;
            state.error.message = action.payload?.message || action.error?.message || "Failed to fetch notices";
            state.error.content = action.payload || { message: state.error.message };
            state.fetchData = false; // Reset fetchData on error too
            // Ensure data structure is maintained even on error
            if (!state.data || !state.data.department_notices || !state.data.employee_notices) {
                state.data = { department_notices: [], employee_notices: [] };
            }
        });

        // Create Notice
        builder.addCase(HandleCreateNotice.pending, (state) => {
            state.isLoading = true;
            state.error.content = null;
        });
        builder.addCase(HandleCreateNotice.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error.status = false;
            state.success = action.payload.success;
            state.fetchData = true; // Trigger refetch
        });
        builder.addCase(HandleCreateNotice.rejected, (state, action) => {
            state.isLoading = false;
            state.error.status = true;
            state.error.message = action.payload?.message || action.error?.message || "Failed to create notice";
            state.error.content = action.payload || { message: state.error.message };
        });

        // Get Single Notice
        builder.addCase(HandleGetNotice.pending, (state) => {
            state.isLoading = true;
            state.error.content = null;
        });
        builder.addCase(HandleGetNotice.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error.status = false;
            state.success = action.payload.success;
        });
        builder.addCase(HandleGetNotice.rejected, (state, action) => {
            state.isLoading = false;
            state.error.status = true;
            state.error.message = action.payload?.message || action.error?.message || "Failed to fetch notice";
            state.error.content = action.payload || { message: state.error.message };
        });

        // Update Notice
        builder.addCase(HandleUpdateNotice.pending, (state) => {
            state.isLoading = true;
            state.error.content = null;
        });
        builder.addCase(HandleUpdateNotice.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error.status = false;
            state.success = action.payload.success;
            state.fetchData = true; // Trigger refetch
        });
        builder.addCase(HandleUpdateNotice.rejected, (state, action) => {
            state.isLoading = false;
            state.error.status = true;
            state.error.message = action.payload?.message || action.error?.message || "Failed to update notice";
            state.error.content = action.payload || { message: state.error.message };
        });

        // Delete Notice
        builder.addCase(HandleDeleteNotice.pending, (state) => {
            state.isLoading = true;
            state.error.content = null;
        });
        builder.addCase(HandleDeleteNotice.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error.status = false;
            state.success = action.payload.success;
            state.fetchData = true; // Trigger refetch
        });
        builder.addCase(HandleDeleteNotice.rejected, (state, action) => {
            state.isLoading = false;
            state.error.status = true;
            state.error.message = action.payload?.message || action.error?.message || "Failed to delete notice";
            state.error.content = action.payload || { message: state.error.message };
        });
    }
});

export const { clearNoticeError, resetNoticeState } = NoticeSlice.actions;
export default NoticeSlice.reducer;

