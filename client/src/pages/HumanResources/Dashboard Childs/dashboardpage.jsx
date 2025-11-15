import { KeyDetailBoxContentWrapper } from "../../../components/common/Dashboard/contentwrappers.jsx"
import { SalaryChart } from "../../../components/common/Dashboard/salarychart.jsx"
import { DataTable } from "../../../components/common/Dashboard/datatable.jsx"
import { useEffect } from "react"
import { HandleGetDashboard } from "../../../redux/Thunks/DashboardThunk.js"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Loading } from "../../../components/common/loading.jsx"
import { Users, Building2, Calendar, FileText, TrendingUp, Activity, Award, Sparkles } from "lucide-react"
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
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 p-6 space-y-6">
            {/* Premium Header Section */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-purple-600/10 rounded-3xl blur-3xl"></div>
                <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 p-8">
                    <div className="flex items-center justify-between flex-wrap gap-4">
                        <div className="space-y-2">
                            <div className="flex items-center gap-3">
                                <div className="p-3 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl shadow-lg">
                                    <Sparkles className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
                                        HR Dashboard
                                    </h1>
                                    <p className="text-gray-600 mt-1 flex items-center gap-2">
                                        <Activity className="w-4 h-4 text-blue-600" />
                                        Welcome back! Here's what's happening today.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl text-white font-semibold shadow-lg flex items-center gap-2">
                                <TrendingUp className="w-4 h-4" />
                                <span>All Systems Active</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Key Metrics Cards */}
            <KeyDetailBoxContentWrapper imagedataarray={DataArray} data={DashboardState.data} />
            
            {/* Charts Section with Premium Design */}
            <div className="grid min-[250px]:grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="group relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                    <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-6 hover:shadow-3xl transition-all duration-300">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl">
                                    <TrendingUp className="w-5 h-5 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">Salary Overview</h3>
                            </div>
                            <Award className="w-5 h-5 text-indigo-600" />
                        </div>
                        <SalaryChart balancedata={DashboardState.data} />
                    </div>
                </div>

                <div className="group relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                    <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-6 hover:shadow-3xl transition-all duration-300">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
                                    <FileText className="w-5 h-5 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">Recent Notices</h3>
                            </div>
                            <Activity className="w-5 h-5 text-purple-600" />
                        </div>
                        <DataTable noticedata={DashboardState.data} />
                    </div>
                </div>
            </div>

            {/* Quick Navigation Section - Premium Design */}
            <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 hover:shadow-3xl transition-all duration-300">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl">
                            <Activity className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">Quick Navigation</h2>
                            <p className="text-gray-600 text-sm mt-1">Access all sections with one click</p>
                        </div>
                    </div>
                    <ButtonTest />
                </div>
            </div>
        </div>
    )
}