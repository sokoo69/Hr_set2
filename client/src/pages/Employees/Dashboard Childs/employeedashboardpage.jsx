import { KeyDetailBoxContentWrapper } from "../../../components/common/Dashboard/contentwrappers.jsx"
import { SalaryChart } from "../../../components/common/Dashboard/salarychart.jsx"
import { DataTable } from "../../../components/common/Dashboard/datatable.jsx"
import { useEffect } from "react"
import { HandleGetEmployeeDashboard } from "../../../redux/Thunks/EmployeeDashboardThunk.js"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Loading } from "../../../components/common/loading.jsx"
import { User, Calendar, FileText, DollarSign } from "lucide-react"

export const EmployeeDashboardPage = () => {
    console.log("Employee Dashboard Reloaded")
    const DashboardState = useSelector((state) => state.employeeDashboardReducer)
    const dispatch = useDispatch()
    const DataArray = [
        {
            icon: User,
            dataname: "profile",
            path: "/auth/employee/employee-dashboard/profile",
            color: "blue"
        },
        {
            icon: Calendar,
            dataname: "leaves",
            path: "/auth/employee/employee-dashboard/leaves",
            color: "green"
        },
        {
            icon: FileText,
            dataname: "requests",
            path: "/auth/employee/employee-dashboard/requests",
            color: "purple"
        },
        {
            icon: DollarSign,
            dataname: "salary",
            path: "/auth/employee/employee-dashboard/salary",
            color: "yellow"
        }
    ]

    useEffect(() => {
        dispatch(HandleGetEmployeeDashboard({ apiroute: "GETDATA" }))
    },[])

    if (DashboardState.isLoading) { 
        return (
            <Loading />
        )
    }

    return (
        <div className="p-6">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Employee Dashboard</h1>
                <p className="text-gray-600">Manage your employee information and requests</p>
            </div>
            <KeyDetailBoxContentWrapper imagedataarray={DataArray} data={DashboardState.data} />
            <div className="charts-container flex flex-col gap-5 min-[250px]:mx-1 md:mx-2">
                <SalaryChart balancedata={DashboardState.data} />
                <DataTable noticedata={DashboardState.data} />
            </div>
        </>
    )
}
