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
        
        // Mock employee login functionality
        if (apiroute === "LOGIN") {
            // Simulate API delay
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Mock employee credentials
            if (data.email === 'employee@company.com' && data.password === 'employee123') {
                return {
                    success: true,
                    message: "Employee Login Successful",
                    type: "EmployeeLogin",
                    token: 'mock-employee-jwt-token-12345',
                    user: { 
                        email: data.email, 
                        role: 'Employee',
                        firstname: 'John',
                        lastname: 'Doe',
                        department: 'IT',
                        employeeId: 'EMP001'
                    }
                };
            } else {
                return rejectWithValue({
                    success: false,
                    message: "Invalid Employee Credentials, Please Add Correct One",
                    type: "EmployeeLogin"
                });
            }
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
            return rejectWithValue(error.response.data);
        } else {
            return rejectWithValue({
                success: false,
                message: error.message || 'Network error occurred'
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
