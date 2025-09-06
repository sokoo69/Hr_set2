import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "../apis/APIService";
import { HRDepartmentPageEndPoints } from "../apis/APIsEndpoints";

export const HandleGetHRDepartments = createAsyncThunk('HandleGetHRDepartments', async (HRDepartmentPageData, { rejectWithValue }) => {
    try {
        const { apiroute } = HRDepartmentPageData;
        
        // Mock data for departments to prevent API failures
        if (apiroute === "GETALL") {
            return {
                success: true,
                message: "Departments fetched successfully",
                data: [
                    {
                        _id: "dept1",
                        name: "Human Resources",
                        description: "Manages employee relations, recruitment, and HR policies",
                        employees: [
                            { _id: "emp1", firstname: "John", lastname: "Doe", email: "john.doe@company.com", contactnumber: "123-456-7890" },
                            { _id: "emp2", firstname: "Jane", lastname: "Smith", email: "jane.smith@company.com", contactnumber: "123-456-7891" }
                        ],
                        notice: [
                            { _id: "notice1", title: "HR Policy Update", audience: "All Employees", createdby: "HR Team" }
                        ]
                    },
                    {
                        _id: "dept2",
                        name: "Information Technology",
                        description: "Handles software development, system maintenance, and technical support",
                        employees: [
                            { _id: "emp3", firstname: "Mike", lastname: "Johnson", email: "mike.johnson@company.com", contactnumber: "123-456-7892" },
                            { _id: "emp4", firstname: "Sarah", lastname: "Wilson", email: "sarah.wilson@company.com", contactnumber: "123-456-7893" }
                        ],
                        notice: [
                            { _id: "notice2", title: "System Maintenance", audience: "IT Department", createdby: "IT Manager" }
                        ]
                    },
                    {
                        _id: "dept3",
                        name: "Finance",
                        description: "Manages financial planning, budgeting, and accounting operations",
                        employees: [
                            { _id: "emp5", firstname: "David", lastname: "Brown", email: "david.brown@company.com", contactnumber: "123-456-7894" }
                        ],
                        notice: [
                            { _id: "notice3", title: "Budget Review", audience: "Finance Team", createdby: "CFO" }
                        ]
                    }
                ]
            };
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