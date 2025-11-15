import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "../apis/APIService";
import { RecruitmentEndPoints } from "../apis/APIsEndpoints";

export const HandleGetAllRecruitments = createAsyncThunk("HandleGetAllRecruitments", async (_, { rejectWithValue }) => {
    try {
        const response = await apiService.get(RecruitmentEndPoints.GETALL, { 
            withCredentials: true
        })
        return response.data
    } catch (error) {
        return rejectWithValue(error.response?.data || { message: "Failed to fetch recruitments" }); 
    }
})

export const HandleCreateRecruitment = createAsyncThunk("HandleCreateRecruitment", async (recruitmentData, { rejectWithValue }) => {
    try {
        const response = await apiService.post(RecruitmentEndPoints.CREATE, recruitmentData, { 
            withCredentials: true
        })
        return response.data
    } catch (error) {
        return rejectWithValue(error.response?.data || { message: "Failed to create recruitment" }); 
    }
})

export const HandleGetRecruitment = createAsyncThunk("HandleGetRecruitment", async (recruitmentID, { rejectWithValue }) => {
    try {
        const response = await apiService.get(RecruitmentEndPoints.GETONE(recruitmentID), { 
            withCredentials: true
        })
        return response.data
    } catch (error) {
        return rejectWithValue(error.response?.data || { message: "Failed to fetch recruitment" }); 
    }
})

export const HandleUpdateRecruitment = createAsyncThunk("HandleUpdateRecruitment", async (recruitmentData, { rejectWithValue }) => {
    try {
        const response = await apiService.patch(RecruitmentEndPoints.UPDATE, recruitmentData, { 
            withCredentials: true
        })
        return response.data
    } catch (error) {
        return rejectWithValue(error.response?.data || { message: "Failed to update recruitment" }); 
    }
})

export const HandleDeleteRecruitment = createAsyncThunk("HandleDeleteRecruitment", async (recruitmentID, { rejectWithValue }) => {
    try {
        const response = await apiService.delete(RecruitmentEndPoints.DELETE(recruitmentID), { 
            withCredentials: true
        })
        return response.data
    } catch (error) {
        return rejectWithValue(error.response?.data || { message: "Failed to delete recruitment" }); 
    }
})

