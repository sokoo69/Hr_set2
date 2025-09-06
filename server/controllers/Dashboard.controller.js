import { Employee } from "../models/Employee.model.js"
import { Department } from "../models/Department.model.js"
import { Leave } from "../models/Leave.model.js"
import { Salary } from "../models/Salary.model.js"
import { Notice } from "../models/Notice.model.js"
import { GenerateRequest } from "../models/GenerateRequest.model.js"
import { Balance } from "../models/Balance.model.js"

export const HandleHRDashboard = async (req, res) => {
    try {
        // Mock data for testing
        if (req.ORGID === 'mock-org-id') {
            return res.status(200).json({ 
                success: true, 
                data: { 
                    employees: 45, 
                    departments: 8, 
                    leaves: 12, 
                    requestes: 7,
                    balance: [{ availableAmount: 50000, totalSalary: 250000 }],
                    notices: [
                        { 
                            _id: "notice1", 
                            title: "Company Policy Update", 
                            message: "New remote work policy effective from next month", 
                            createdAt: "2024-01-15",
                            audience: "All Employees",
                            createdby: { firstname: "HR", lastname: "Team" }
                        },
                        { 
                            _id: "notice2", 
                            title: "Holiday Notice", 
                            message: "Office will be closed on Independence Day", 
                            createdAt: "2024-01-10",
                            audience: "All Employees",
                            createdby: { firstname: "HR", lastname: "Team" }
                        }
                    ]
                }
            })
        }

        const employees = await Employee.countDocuments({ organizationID: req.ORGID })
        const departments = await Department.countDocuments({ organizationID: req.ORGID })
        const leaves = await Leave.countDocuments({ organizationID: req.ORGID })
        const requestes = await GenerateRequest.countDocuments({ organizationID: req.ORGID })
        const balance = await Balance.find({ organizationID: req.ORGID })
        const notices = await Notice.find({ organizationID: req.ORGID }).sort({ createdAt: -1 }).limit(10).populate("createdby", "firstname lastname")

        return res.status(200).json({ success: true, data: { employees: employees, departments: departments, leaves: leaves, requestes: requestes, balance: balance, notices: notices } })
    }
    catch (error) {
        return res.status(500).json({ success: false, error: error, message: "internal server error" })
    }
}

export const HandleEmployeeDashboard = async (req, res) => {
    try {
        // Get employee-specific data
        const employee = await Employee.findById(req.EMid).select('firstname lastname email departmentID')
        const employeeLeaves = await Leave.find({ employeeID: req.EMid })
        const employeeRequests = await GenerateRequest.find({ employeeID: req.EMid })
        const employeeBalance = await Balance.find({ employeeID: req.EMid })
        const notices = await Notice.find({ organizationID: req.ORGID }).sort({ createdAt: -1 }).limit(10).populate("createdby", "firstname lastname")

        return res.status(200).json({ 
            success: true, 
            data: { 
                employee: employee,
                leaves: employeeLeaves, 
                requests: employeeRequests, 
                balance: employeeBalance, 
                notices: notices 
            } 
        })
    }
    catch (error) {
        return res.status(500).json({ success: false, error: error, message: "internal server error" })
    }
}