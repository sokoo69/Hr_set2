import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "../apis/APIService";
import { HREndPoints } from "../apis/APIsEndpoints";

export const HandleGetHumanResources = createAsyncThunk("HandleGetHumanResources", async (HRData, { rejectWithValue }) => {
    try {
        const { apiroute } = HRData;
        const response = await apiService.get(`${HREndPoints[apiroute]}`, {
            withCredentials: true
        });
        return response.data;
    }
    catch (error) {
        console.log('HR Get Error:', error);
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


export const HandlePostHumanResources = createAsyncThunk("HandlePostHumanResources", async (HRData, { rejectWithValue }) => {
    try {
        const { apiroute, data, type } = HRData
        
        // Mock signup functionality (like dashboard)
        if (apiroute === "SIGNUP") {
            // Simulate API delay
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Basic validation
            if (!data.email || !data.textpassword || !data.firstname || !data.lastname) {
                return rejectWithValue({
                    success: false,
                    message: "Please fill in all required fields"
                });
            }
            
            if (data.password !== data.textpassword) {
                return rejectWithValue({
                    success: false,
                    message: "Passwords do not match"
                });
            }
            
            // Mock check if email already exists
            if (data.email === 'Shawon.saykot2023@gmail.com') {
                return rejectWithValue({
                    success: false,
                    message: "Email already exists. Please use a different email or try logging in."
                });
            }
            
            // Mock successful signup
            return {
                success: true,
                message: "HR account created successfully! Please check your email for verification.",
                type: "HRSignup",
                user: {
                    email: data.email,
                    firstname: data.firstname,
                    lastname: data.lastname,
                    role: 'HR-Admin',
                    organizationName: data.name
                }
            };
        }
        
        // Real API call for login
        if (apiroute === "LOGIN") {
            const response = await apiService.post(`${HREndPoints[apiroute]}`, data, {
                withCredentials: true
            });
            return response.data;
        }
        
        if (type == "resetpassword") {
            const response = await apiService.post(`${HREndPoints.RESET_PASSWORD(apiroute)}`, data, { 
                withCredentials: true
            })
            return response.data
        }
        
        // For any other HR API calls, use the endpoints
        const response = await apiService.post(`${HREndPoints[apiroute]}`, data, {
            withCredentials: true
        })
        return response.data
    } catch (error) {
        console.log('HR Post Error:', error);
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

export const HandlePutHumanResources = createAsyncThunk("HandlePutHumanResources", async (HRData, { rejectWithValue }) => { })

export const HandlePatchHumanResources = createAsyncThunk("HandlePutHumanResources", async (HRData, { rejectWithValue }) => { })

export const HandleDeleteHumanResources = createAsyncThunk("HandlePutHumanResources", async (HRData, { rejectWithValue }) => { })