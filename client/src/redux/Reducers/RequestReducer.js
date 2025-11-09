import { createSlice } from "@reduxjs/toolkit";
import { HandleGetAllRequests, HandleCreateRequest, HandleUpdateRequest, HandleDeleteRequest } from "../Thunks/RequestThunk";

const RequestSlice = createSlice({
    name: 'request',
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
            .addCase(HandleGetAllRequests.pending, (state) => {
                state.isLoading = true;
                state.error = { status: false, message: null, content: null };
            })
            .addCase(HandleGetAllRequests.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload?.data || action.payload || [];
                state.error = { status: false, message: null, content: null };
            })
            .addCase(HandleGetAllRequests.rejected, (state, action) => {
                state.isLoading = false;
                state.error = {
                    status: true,
                    message: action.payload?.message || "Failed to fetch requests",
                    content: action.payload
                };
            })
            .addCase(HandleCreateRequest.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(HandleCreateRequest.fulfilled, (state, action) => {
                state.isLoading = false;
                if (action.payload?.data) {
                    state.data.push(action.payload.data);
                }
                state.error = { status: false, message: null, content: null };
            })
            .addCase(HandleCreateRequest.rejected, (state, action) => {
                state.isLoading = false;
                state.error = {
                    status: true,
                    message: action.payload?.message || "Failed to create request",
                    content: action.payload
                };
            })
            .addCase(HandleUpdateRequest.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(HandleUpdateRequest.fulfilled, (state, action) => {
                state.isLoading = false;
                if (action.payload?.data) {
                    const index = state.data.findIndex(request => request._id === action.payload.data._id);
                    if (index !== -1) {
                        state.data[index] = action.payload.data;
                    }
                }
                state.error = { status: false, message: null, content: null };
            })
            .addCase(HandleUpdateRequest.rejected, (state, action) => {
                state.isLoading = false;
                state.error = {
                    status: true,
                    message: action.payload?.message || "Failed to update request",
                    content: action.payload
                };
            })
            .addCase(HandleDeleteRequest.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(HandleDeleteRequest.fulfilled, (state, action) => {
                state.isLoading = false;
                const deletedId = action.payload?.data?._id || action.payload?._id;
                if (deletedId) {
                    state.data = state.data.filter(request => request._id !== deletedId);
                }
                state.error = { status: false, message: null, content: null };
            })
            .addCase(HandleDeleteRequest.rejected, (state, action) => {
                state.isLoading = false;
                state.error = {
                    status: true,
                    message: action.payload?.message || "Failed to delete request",
                    content: action.payload
                };
            });
    }
})

export default RequestSlice.reducer

