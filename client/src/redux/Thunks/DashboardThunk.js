import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "../apis/APIService";
import { DashboardEndPoints } from "../apis/APIsEndpoints";

export const HandleGetDashboard = createAsyncThunk("HandleGetDashboard", async (DashboardData, { rejectWithValue }) => {
    try {
        const { apiroute } = DashboardData
        
        // Mock data for HR dashboard
        if (apiroute === "GETDATA") {
            return {
                success: true,
                message: "HR dashboard data fetched successfully",
                data: {
                    totalEmployees: 45,
                    totalDepartments: 8,
                    pendingLeaves: 12,
                    pendingRequests: 7,
                    totalSalary: 250000,
                    salaryData: [
                        { month: "January", SalriesPaid: 200000, AvailableAmount: 50000 },
                        { month: "February", SalriesPaid: 180000, AvailableAmount: 70000 },
                        { month: "March", SalriesPaid: 220000, AvailableAmount: 30000 },
                        { month: "April", SalriesPaid: 190000, AvailableAmount: 60000 },
                        { month: "May", SalriesPaid: 210000, AvailableAmount: 40000 },
                        { month: "June", SalriesPaid: 200000, AvailableAmount: 50000 }
                    ],
                    notices: [
                        { id: 1, title: "Company Policy Update", message: "New remote work policy effective from next month", date: "2024-01-15", audience: "All Employees" },
                        { id: 2, title: "Holiday Notice", message: "Office will be closed on Independence Day", date: "2024-01-10", audience: "All Employees" },
                        { id: 3, title: "Team Meeting", message: "Monthly team meeting scheduled for Friday", date: "2024-01-08", audience: "HR Team" }
                    ],
                    recentActivities: [
                        { id: 1, activity: "New Employee Onboarded", employee: "Sarah Wilson", date: "2024-01-12", status: "Completed" },
                        { id: 2, activity: "Leave Request Approved", employee: "John Doe", date: "2024-01-11", status: "Completed" },
                        { id: 3, activity: "Department Created", department: "Marketing", date: "2024-01-10", status: "Completed" }
                    ]
                }
            };
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
