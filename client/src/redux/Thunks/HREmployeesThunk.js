import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "../apis/APIService";
import { HREmployeesPageEndPoints } from "../apis/APIsEndpoints";

export const HandleGetHREmployees = createAsyncThunk('HandleGetHREmployees', async (HREmployeeData, { rejectWithValue }) => {
    try {
        const { apiroute } = HREmployeeData
        
        // Mock data for HR employees
        if (apiroute === "GETALL") {
            return {
                success: true,
                message: "Employees fetched successfully",
                data: [
                    {
                        _id: "emp1",
                        firstname: "John",
                        lastname: "Doe",
                        email: "john.doe@company.com",
                        contactnumber: "123-456-7890",
                        department: { name: "Information Technology" },
                        position: "Software Developer",
                        joinDate: "2023-01-15",
                        status: "Active"
                    },
                    {
                        _id: "emp2",
                        firstname: "Jane",
                        lastname: "Smith",
                        email: "jane.smith@company.com",
                        contactnumber: "123-456-7891",
                        department: { name: "Human Resources" },
                        position: "HR Specialist",
                        joinDate: "2023-02-20",
                        status: "Active"
                    },
                    {
                        _id: "emp3",
                        firstname: "Mike",
                        lastname: "Johnson",
                        email: "mike.johnson@company.com",
                        contactnumber: "123-456-7892",
                        department: { name: "Finance" },
                        position: "Financial Analyst",
                        joinDate: "2023-03-10",
                        status: "Active"
                    },
                    {
                        _id: "emp4",
                        firstname: "Sarah",
                        lastname: "Wilson",
                        email: "sarah.wilson@company.com",
                        contactnumber: "123-456-7893",
                        department: { name: "Marketing" },
                        position: "Marketing Manager",
                        joinDate: "2023-04-05",
                        status: "Active"
                    },
                    {
                        _id: "emp5",
                        firstname: "David",
                        lastname: "Brown",
                        email: "david.brown@company.com",
                        contactnumber: "123-456-7894",
                        department: { name: "Operations" },
                        position: "Operations Manager",
                        joinDate: "2023-05-12",
                        status: "Active"
                    }
                ]
            };
        }
        
        const response = await apiService.get(`${HREmployeesPageEndPoints[apiroute]}`, {
            withCredentials: true
        })
        return response.data
    }

    catch (error) {
        console.log('HR Employees Error:', error);
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

export const HandlePostHREmployees = createAsyncThunk('HandlePostHREmploy', async (HREmployeeData, { rejectWithValue }) => {
    try {
        const { apiroute, data } = HREmployeeData
        const response = await apiService.post(`${HREmployeesPageEndPoints[apiroute]}`, data, {
            withCredentials: true
        })
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})

export const HandleDeleteHREmployees = createAsyncThunk("HandleDeleteHREmployees", async (HREmployeeData, { rejectWithValue }) => {
    try {
        const { apiroute } = HREmployeeData
        const RouteArray = apiroute.split(".")
        if (RouteArray.length > 0) {
            const response = await apiService.delete(`${HREmployeesPageEndPoints[RouteArray[0]](RouteArray[1])}`, {
                withCredentials : true
            })
            return response.data
        }
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})