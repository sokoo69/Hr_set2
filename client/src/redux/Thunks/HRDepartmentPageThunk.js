import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "../apis/APIService";
import { HRDepartmentPageEndPoints } from "../apis/APIsEndpoints";

export const HandleGetHRDepartments = createAsyncThunk('HandleGetHRDepartments', async (HRDepartmentPageData, { rejectWithValue }) => {
    try {
        const { apiroute } = HRDepartmentPageData;
        
        // Real API call for departments
        if (apiroute === "GETALL") {
            const response = await apiService.get(`${HRDepartmentPageEndPoints[apiroute]}`, { 
                withCredentials: true
            });
            return response.data;
        }
        
        const response = await apiService.get(`${HRDepartmentPageEndPoints[apiroute]}`, {
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        console.log('Department API Error:', error);
        if (error.response && error.response.data) {
            return rejectWithValue(error.response.data);
        } else {
            return rejectWithValue({
                success: false,
                message: error.message || 'Network error occurred'
            });
        }
    }
});

export const HandlePostHRDepartments = createAsyncThunk('HandlePostHRDepartments', async (HRDepartmentPageData, { rejectWithValue }) => {
    try {
        const { apiroute, data } = HRDepartmentPageData;
        
        // Mock response for department creation
        if (apiroute === "CREATE") {
            return {
                success: true,
                message: "Department created successfully",
                data: {
                    _id: `dept_${Date.now()}`,
                    name: data.name,
                    description: data.description,
                    employees: [],
                    notice: []
                }
            };
        }
        
        const response = await apiService.post(`${HRDepartmentPageEndPoints[apiroute]}`, data, {
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        console.log('Department POST Error:', error);
        if (error.response && error.response.data) {
            return rejectWithValue(error.response.data);
        } else {
            return rejectWithValue({
                success: false,
                message: error.message || 'Network error occurred'
            });
        }
    }
});

export const HandlePatchHRDepartments = createAsyncThunk('HandlePatchHRDepartments', async (HRDepartmentPageData, { rejectWithValue }) => {
    try {
        const { apiroute, data } = HRDepartmentPageData;
        
        // Mock response for department update
        if (apiroute === "UPDATE") {
            return {
                success: true,
                message: "Department updated successfully",
                data: data
            };
        }
        
        const response = await apiService.patch(`${HRDepartmentPageEndPoints[apiroute]}`, data, {
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        console.log('Department PATCH Error:', error);
        if (error.response && error.response.data) {
            return rejectWithValue(error.response.data);
        } else {
            return rejectWithValue({
                success: false,
                message: error.message || 'Network error occurred'
            });
        }
    }
});

export const HandleDeleteHRDepartments = createAsyncThunk("HandleDeleteHRDepartments", async (HRDepartmentPageData, { rejectWithValue }) => {
    try {
        const { apiroute, data } = HRDepartmentPageData;
        
        // Mock response for department deletion
        if (apiroute === "DELETE") {
            return {
                success: true,
                message: "Department deleted successfully",
                data: data
            };
        }
        
        const response = await apiService.delete(`${HRDepartmentPageEndPoints[apiroute]}`, {
            data: data,
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        console.log('Department DELETE Error:', error);
        if (error.response && error.response.data) {
            return rejectWithValue(error.response.data);
        } else {
            return rejectWithValue({
                success: false,
                message: error.message || 'Network error occurred'
            });
        }
    }
});