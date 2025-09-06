import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "../apis/APIService";
import { DashboardEndPoints } from "../apis/APIsEndpoints";

export const HandleGetDashboard = createAsyncThunk("HandleGetDashboard", async (DashboardData, { rejectWithValue }) => {
    try {
        const { apiroute } = DashboardData
        
        // Real API call for HR dashboard
        if (apiroute === "GETDATA") {
            const response = await apiService.get(`${DashboardEndPoints[apiroute]}`, { 
                withCredentials: true
            });
            return response.data;
        }
        
        const response = await apiService.get(`${DashboardEndPoints[apiroute]}`, { 
            withCredentials: true
        })
        return response.data
    } catch (error) {
        console.log('HR Dashboard Error:', error);
        if (error.response && error.response.data) {
            return rejectWithValue(error.response.data);
        } else {
            return rejectWithValue({
                success: false,
                message: error.message || 'Network error occurred'
            });
        }
    }
})
