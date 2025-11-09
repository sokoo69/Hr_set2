import { createAsyncThunk } from '@reduxjs/toolkit'
import { apiService } from '../apis/APIService'
import { APIsEndPoints } from '../apis/APIsEndpoints.js'


export const HandleGetEmployees = createAsyncThunk("handleGetEmployees", async (EmployeeData, { rejectWithValue }) => {
    try {
        const { apiroute } = EmployeeData
        const response = await apiService.get(`${APIsEndPoints[apiroute]}`, { 
            withCredentials: true
        })
        return response.data
    } catch (error) { 
        return rejectWithValue(error.response.data);
    }
})

export const HandlePostEmployees = createAsyncThunk("HandlePostEmployees", async (EmployeeData, { rejectWithValue }) => {
    try {
        const { apiroute, data, type } = EmployeeData
        
        // Real API call for employee login
        if (apiroute === "LOGIN") {
            console.log('Employee Login API Call:', {
                url: `${APIsEndPoints[apiroute]}`,
                baseURL: apiService.defaults.baseURL,
                fullURL: `${apiService.defaults.baseURL}${APIsEndPoints[apiroute]}`,
                data: { ...data, password: data.password ? '***' : undefined }
            });
            const response = await apiService.post(`${APIsEndPoints[apiroute]}`, data, {
                withCredentials: true
            });
            console.log('Employee Login API Response:', response.data);
            return response.data;
        }
        
        if (type == "resetpassword") {
            const response = await apiService.post(`${APIsEndPoints.RESET_PASSWORD(apiroute)}`, data, {
                withCredentials: true
            })
            return response.data
        }
        else {
            const response = await apiService.post(`${APIsEndPoints[apiroute]}`, data, {
                withCredentials: true
            })
            return response.data
        }
    } catch (error) {
        console.log('Employee Post Error:', error);
        if (error.response && error.response.data) {
            return rejectWithValue({
                ...error.response.data,
                message: error.response.data.message || 'An error occurred'
            });
        } else if (error.request) {
            // Network error - no response received
            return rejectWithValue({
                success: false,
                message: 'Network error: Unable to connect to server. Please check your internet connection.'
            });
        } else {
            return rejectWithValue({
                success: false,
                message: error.message || 'An unexpected error occurred'
            });
        }
    }
})

export const HandlePutEmployees = createAsyncThunk("HandlePutEmployees", async (EmployeeData, { rejectWithValue }) => {
    try {
        const { apiroute, data } = EmployeeData
        const response = await apiService.put(`${APIsEndPoints[apiroute]}`, data, {
            withCredentials: true
        })
        return response.data
    } catch (error) {
        console.log('Employee Put Error:', error);
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

export const HandlePatchEmployees = createAsyncThunk("HandlePatchEmployees", async (EmployeeData, { rejectWithValue }) => {
    try {
        const { apiroute, data } = EmployeeData
        const response = await apiService.patch(`${APIsEndPoints[apiroute]}`, data, {
            withCredentials: true
        })
        return response.data
    } catch (error) {
        console.log('Employee Patch Error:', error);
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

export const HandleDeleteEmployees = createAsyncThunk("HandleDeleteEmployees", async (EmployeeData, { rejectWithValue }) => {
    try {
        const { apiroute, data } = EmployeeData
        const response = await apiService.delete(`${APIsEndPoints[apiroute]}`, {
            data: data,
            withCredentials: true
        })
        return response.data
    } catch (error) {
        console.log('Employee Delete Error:', error);
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
