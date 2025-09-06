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
        
        // Mock signup functionality
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
            
            // Check if email already exists (mock check)
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
                    role: 'HR-Admin'
                }
            };
        }
        
        // Mock login functionality (existing)
        if (apiroute === "LOGIN") {
            if (data.email === 'Shawon.saykot2023@gmail.com' && data.password === 'Shawon.saykot2023') {
                return {
                    success: true,
                    message: "HR Login Successfull",
                    type: "HRLogin",
                    token: 'mock-jwt-token-12345',
                    user: { email: data.email, role: 'HR-Admin' }
                };
            } else {
                return rejectWithValue({
                    success: false,
                    message: "Invaild Credentials, Please Add Correct One",
                    type: "HRLogin"
                });
            }
        }
        
        if (type == "resetpassword") {
            const response = await apiService.post(`${HREndPoints.RESET_PASSWORD(apiroute)}`, data, { 
                withCredentials: true
            })
            return response.data
        }
        else {
            const response = await apiService.post(`${HREndPoints[apiroute]}`, data, {
                withCredentials: true
            })
            return response.data 
        }
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