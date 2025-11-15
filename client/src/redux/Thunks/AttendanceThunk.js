import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "../apis/APIService";
import { AttendanceEndPoints } from "../apis/APIsEndpoints";

export const HandleGetAllAttendances = createAsyncThunk("HandleGetAllAttendances", async (_, { rejectWithValue }) => {
    try {
        const response = await apiService.get(AttendanceEndPoints.GETALL, { 
            withCredentials: true
        })
        return response.data
    } catch (error) {
        return rejectWithValue(error.response?.data || { message: "Failed to fetch attendances" }); 
    }
})

export const HandleInitializeAttendance = createAsyncThunk("HandleInitializeAttendance", async (attendanceData, { rejectWithValue }) => {
    try {
        const response = await apiService.post(AttendanceEndPoints.INITIALIZE, attendanceData, { 
            withCredentials: true
        })
        return response.data
    } catch (error) {
        return rejectWithValue(error.response?.data || { message: "Failed to initialize attendance" }); 
    }
})

export const HandleGetAttendance = createAsyncThunk("HandleGetAttendance", async (attendanceID, { rejectWithValue }) => {
    try {
        const response = await apiService.get(AttendanceEndPoints.GETONE(attendanceID), { 
            withCredentials: true
        })
        return response.data
    } catch (error) {
        return rejectWithValue(error.response?.data || { message: "Failed to fetch attendance" }); 
    }
})

export const HandleUpdateAttendance = createAsyncThunk("HandleUpdateAttendance", async (attendanceData, { rejectWithValue }) => {
    try {
        const response = await apiService.patch(AttendanceEndPoints.UPDATE, attendanceData, { 
            withCredentials: true
        })
        return response.data
    } catch (error) {
        return rejectWithValue(error.response?.data || { message: "Failed to update attendance" }); 
    }
})

export const HandleDeleteAttendance = createAsyncThunk("HandleDeleteAttendance", async (attendanceID, { rejectWithValue }) => {
    try {
        const response = await apiService.delete(AttendanceEndPoints.DELETE(attendanceID), { 
            withCredentials: true
        })
        return response.data
    } catch (error) {
        return rejectWithValue(error.response?.data || { message: "Failed to delete attendance" }); 
    }
})

