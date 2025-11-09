import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "../apis/APIService";
import { LeaveEndPoints } from "../apis/APIsEndpoints";

export const HandleGetAllLeaves = createAsyncThunk("HandleGetAllLeaves", async (_, { rejectWithValue }) => {
    try {
        const response = await apiService.get(LeaveEndPoints.GETALL, { 
            withCredentials: true
        })
        return response.data
    } catch (error) {
        return rejectWithValue(error.response?.data || { message: "Failed to fetch leaves" }); 
    }
})

export const HandleCreateLeave = createAsyncThunk("HandleCreateLeave", async (leaveData, { rejectWithValue }) => {
    try {
        const response = await apiService.post(LeaveEndPoints.CREATE, leaveData, { 
            withCredentials: true
        })
        return response.data
    } catch (error) {
        return rejectWithValue(error.response?.data || { message: "Failed to create leave" }); 
    }
})

export const HandleGetLeave = createAsyncThunk("HandleGetLeave", async (leaveID, { rejectWithValue }) => {
    try {
        const response = await apiService.get(LeaveEndPoints.GETONE(leaveID), { 
            withCredentials: true
        })
        return response.data
    } catch (error) {
        return rejectWithValue(error.response?.data || { message: "Failed to fetch leave" }); 
    }
})

export const HandleUpdateLeave = createAsyncThunk("HandleUpdateLeave", async (leaveData, { rejectWithValue }) => {
    try {
        const response = await apiService.patch(LeaveEndPoints.UPDATE, leaveData, { 
            withCredentials: true
        })
        return response.data
    } catch (error) {
        return rejectWithValue(error.response?.data || { message: "Failed to update leave" }); 
    }
})

export const HandleDeleteLeave = createAsyncThunk("HandleDeleteLeave", async (leaveID, { rejectWithValue }) => {
    try {
        const response = await apiService.delete(LeaveEndPoints.DELETE(leaveID), { 
            withCredentials: true
        })
        return response.data
    } catch (error) {
        return rejectWithValue(error.response?.data || { message: "Failed to delete leave" }); 
    }
})

