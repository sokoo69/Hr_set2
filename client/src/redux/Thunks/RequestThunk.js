import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "../apis/APIService";
import { RequestEndPoints } from "../apis/APIsEndpoints";

export const HandleGetAllRequests = createAsyncThunk("HandleGetAllRequests", async (_, { rejectWithValue }) => {
    try {
        const response = await apiService.get(RequestEndPoints.GETALL, { 
            withCredentials: true
        })
        return response.data
    } catch (error) {
        return rejectWithValue(error.response?.data || { message: "Failed to fetch requests" }); 
    }
})

export const HandleCreateRequest = createAsyncThunk("HandleCreateRequest", async (requestData, { rejectWithValue }) => {
    try {
        const response = await apiService.post(RequestEndPoints.CREATE, requestData, { 
            withCredentials: true
        })
        return response.data
    } catch (error) {
        return rejectWithValue(error.response?.data || { message: "Failed to create request" }); 
    }
})

export const HandleGetRequest = createAsyncThunk("HandleGetRequest", async (requestID, { rejectWithValue }) => {
    try {
        const response = await apiService.get(RequestEndPoints.GETONE(requestID), { 
            withCredentials: true
        })
        return response.data
    } catch (error) {
        return rejectWithValue(error.response?.data || { message: "Failed to fetch request" }); 
    }
})

export const HandleUpdateRequest = createAsyncThunk("HandleUpdateRequest", async (requestData, { rejectWithValue }) => {
    try {
        const response = await apiService.patch(RequestEndPoints.UPDATE, requestData, { 
            withCredentials: true
        })
        return response.data
    } catch (error) {
        return rejectWithValue(error.response?.data || { message: "Failed to update request" }); 
    }
})

export const HandleDeleteRequest = createAsyncThunk("HandleDeleteRequest", async (requestID, { rejectWithValue }) => {
    try {
        const response = await apiService.delete(RequestEndPoints.DELETE(requestID), { 
            withCredentials: true
        })
        return response.data
    } catch (error) {
        return rejectWithValue(error.response?.data || { message: "Failed to delete request" }); 
    }
})

