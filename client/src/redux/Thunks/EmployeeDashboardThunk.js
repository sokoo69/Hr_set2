import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "../apis/APIService";
import { EmployeeDashboardEndPoints } from "../apis/APIsEndpoints";

export const HandleGetEmployeeDashboard = createAsyncThunk("HandleGetEmployeeDashboard", async (DashboardData, { rejectWithValue }) => {
    try {
        const { apiroute } = DashboardData
        
        // Mock data for employee dashboard
        if (apiroute === "GETDATA") {
            return {
                success: true,
                message: "Employee dashboard data fetched successfully",
                data: {
                    employeeInfo: {
                        name: "John Doe",
                        employeeId: "EMP001",
                        department: "Information Technology",
                        position: "Software Developer",
                        email: "employee@company.com",
                        joinDate: "2023-01-15"
                    },
                    salaryData: [
                        { month: "January", SalriesPaid: 5000, AvailableAmount: 5000 },
                        { month: "February", SalriesPaid: 5000, AvailableAmount: 10000 },
                        { month: "March", SalriesPaid: 5000, AvailableAmount: 15000 },
                        { month: "April", SalriesPaid: 5000, AvailableAmount: 20000 },
                        { month: "May", SalriesPaid: 5000, AvailableAmount: 25000 },
                        { month: "June", SalriesPaid: 5000, AvailableAmount: 30000 }
                    ],
                    notices: [
                        { id: 1, title: "Company Meeting", message: "Monthly team meeting scheduled for next Friday", date: "2024-01-15" },
                        { id: 2, title: "Holiday Notice", message: "Office will be closed on Independence Day", date: "2024-01-10" },
                        { id: 3, title: "Policy Update", message: "New remote work policy has been updated", date: "2024-01-05" }
                    ],
                    leaveBalance: {
                        totalLeaves: 20,
                        usedLeaves: 5,
                        remainingLeaves: 15
                    },
                    recentActivities: [
                        { id: 1, activity: "Leave Request Submitted", date: "2024-01-12", status: "Pending" },
                        { id: 2, activity: "Salary Credited", date: "2024-01-01", status: "Completed" },
                        { id: 3, activity: "Profile Updated", date: "2023-12-28", status: "Completed" }
                    ]
                }
            };
        }
        
        const response = await apiService.get(`${EmployeeDashboardEndPoints[apiroute]}`, { 
            withCredentials: true
        })
        return response.data
    } catch (error) {
        console.log('Employee Dashboard Error:', error);
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
