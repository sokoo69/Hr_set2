import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "../apis/APIService";
import { InterviewInsightsEndPoints } from "../apis/APIsEndpoints";

export const HandleGetAllInterviews = createAsyncThunk("HandleGetAllInterviews", async (_, { rejectWithValue }) => {
    try {
        const response = await apiService.get(InterviewInsightsEndPoints.GETALL, { 
            withCredentials: true
        })
        return response.data
    } catch (error) {
        return rejectWithValue(error.response?.data || { message: "Failed to fetch interviews" }); 
    }
})

export const HandleCreateInterview = createAsyncThunk("HandleCreateInterview", async (interviewData, { rejectWithValue }) => {
    try {
        const response = await apiService.post(InterviewInsightsEndPoints.CREATE, interviewData, { 
            withCredentials: true
        })
        return response.data
    } catch (error) {
        return rejectWithValue(error.response?.data || { message: "Failed to create interview" }); 
    }
})

export const HandleGetInterview = createAsyncThunk("HandleGetInterview", async (interviewID, { rejectWithValue }) => {
    try {
        const response = await apiService.get(InterviewInsightsEndPoints.GETONE(interviewID), { 
            withCredentials: true
        })
        return response.data
    } catch (error) {
        return rejectWithValue(error.response?.data || { message: "Failed to fetch interview" }); 
    }
})

export const HandleUpdateInterview = createAsyncThunk("HandleUpdateInterview", async (interviewData, { rejectWithValue }) => {
    try {
        const response = await apiService.patch(InterviewInsightsEndPoints.UPDATE, interviewData, { 
            withCredentials: true
        })
        return response.data
    } catch (error) {
        return rejectWithValue(error.response?.data || { message: "Failed to update interview" }); 
    }
})

export const HandleDeleteInterview = createAsyncThunk("HandleDeleteInterview", async (interviewID, { rejectWithValue }) => {
    try {
        const response = await apiService.delete(InterviewInsightsEndPoints.DELETE(interviewID), { 
            withCredentials: true
        })
        return response.data
    } catch (error) {
        return rejectWithValue(error.response?.data || { message: "Failed to delete interview" }); 
    }
})

