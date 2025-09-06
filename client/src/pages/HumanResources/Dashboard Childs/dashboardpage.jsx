import { KeyDetailBoxContentWrapper } from "../../../components/common/Dashboard/contentwrappers.jsx"
import { SalaryChart } from "../../../components/common/Dashboard/salarychart.jsx"
import { DataTable } from "../../../components/common/Dashboard/datatable.jsx"
import { useEffect } from "react"
import { HandleGetDashboard } from "../../../redux/Thunks/DashboardThunk.js"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Loading } from "../../../components/common/loading.jsx"
import { Users, Building2, Calendar, FileText } from "lucide-react"
import { ButtonTest } from "../../../components/common/ButtonTest.jsx"
export const HRDashboardPage = () => {
    console.log("Reloaded")
    const DashboardState = useSelector((state) => state.dashboardreducer)
    const dispatch = useDispatch()
    const DataArray = [
        {
            icon: Users,
            dataname: "employees",
            path: "/HR/dashboard/employees",
            color: "blue"
        },
        {
            icon: Building2,
            dataname: "departments",
            path: "/HR/dashboard/departments",
            color: "green"
        },
        {
            icon: Calendar,
            dataname: "leaves",
            path: "/HR/dashboard/leaves",
            color: "purple"
        },
        {
            icon: FileText,
            dataname: "requestes",
            path: "/HR/dashboard/requestes",
            color: "orange"
        }
    ]

    useEffect(() => {
        dispatch(HandleGetDashboard({ apiroute: "GETDATA" }))
    },[])

    if (DashboardState.isLoading) { 
        return (
            <Loading />
        )
    }


    return (
        <div className="p-6">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">HR Dashboard</h1>
                <p className="text-gray-600">Welcome to your HR management dashboard</p>
            </div>
            <KeyDetailBoxContentWrapper imagedataarray={DataArray} data={DashboardState.data} />
            
            {/* Navigation Test Section */}
            <div className="mt-8 p-6 bg-white rounded-xl shadow-sm border border-gray-200">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Navigation Test</h2>
                <p className="text-gray-600 mb-4">Click any button below to test navigation to different sections:</p>
                <ButtonTest />
            </div>
            <div className="salary-notices-container h-3/4 grid min-[250px]:grid-cols-1 lg:grid-cols-2 min-[250px]:gap-3 xl:gap-3">
                <SalaryChart balancedata={DashboardState.data} />
                <DataTable noticedata={DashboardState.data} />
            </div>
        </div>
    )
}