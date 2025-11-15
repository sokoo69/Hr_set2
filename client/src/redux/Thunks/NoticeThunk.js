import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "../apis/APIService";
import { NoticeEndPoints } from "../apis/APIsEndpoints";

export const HandleGetAllNotices = createAsyncThunk("HandleGetAllNotices", async (_, { rejectWithValue }) => {
    try {
        const response = await apiService.get(NoticeEndPoints.GETALL, { 
            withCredentials: true
        })
        console.log('Notice API Response:', response.data)
        return response.data
    } catch (error) {
        console.error('Notice API Error:', error)
        return rejectWithValue(error.response?.data || { 
            success: false,
            message: error.message || "Failed to fetch notices",
            data: { department_notices: [], employee_notices: [] }
        }); 
    }
})

export const HandleCreateNotice = createAsyncThunk("HandleCreateNotice", async (noticeData, { rejectWithValue }) => {
    try {
        const response = await apiService.post(NoticeEndPoints.CREATE, noticeData, { 
            withCredentials: true
        })
        return response.data
    } catch (error) {
        return rejectWithValue(error.response?.data || { message: "Failed to create notice" }); 
    }
})

export const HandleGetNotice = createAsyncThunk("HandleGetNotice", async (noticeID, { rejectWithValue }) => {
    try {
        const response = await apiService.get(NoticeEndPoints.GETONE(noticeID), { 
            withCredentials: true
        })
        return response.data
    } catch (error) {
        return rejectWithValue(error.response?.data || { message: "Failed to fetch notice" }); 
    }
})

export const HandleUpdateNotice = createAsyncThunk("HandleUpdateNotice", async (noticeData, { rejectWithValue }) => {
    try {
        const response = await apiService.patch(NoticeEndPoints.UPDATE, noticeData, { 
            withCredentials: true
        })
        return response.data
    } catch (error) {
        return rejectWithValue(error.response?.data || { message: "Failed to update notice" }); 
    }
})

export const HandleDeleteNotice = createAsyncThunk("HandleDeleteNotice", async (noticeID, { rejectWithValue }) => {
    try {
        const response = await apiService.delete(NoticeEndPoints.DELETE(noticeID), { 
            withCredentials: true
        })
        return response.data
    } catch (error) {
        return rejectWithValue(error.response?.data || { message: "Failed to delete notice" }); 
    }
})

