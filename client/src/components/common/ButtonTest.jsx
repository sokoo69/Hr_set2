import { Link } from "react-router-dom"
import { Users, Building2, Calendar, FileText, DollarSign, Megaphone, Clock, UserPlus, BarChart3, UserCheck } from "lucide-react"

export const ButtonTest = () => {
    const testButtons = [
        { path: "/HR/dashboard/employees", label: "Employees", icon: Users, gradient: "from-blue-500 to-indigo-600", bgGradient: "from-blue-50 to-indigo-50", textColor: "text-blue-700" },
        { path: "/HR/dashboard/departments", label: "Departments", icon: Building2, gradient: "from-green-500 to-emerald-600", bgGradient: "from-green-50 to-emerald-50", textColor: "text-green-700" },
        { path: "/HR/dashboard/leaves", label: "Leaves", icon: Calendar, gradient: "from-purple-500 to-pink-600", bgGradient: "from-purple-50 to-pink-50", textColor: "text-purple-700" },
        { path: "/HR/dashboard/requestes", label: "Requests", icon: FileText, gradient: "from-orange-500 to-amber-600", bgGradient: "from-orange-50 to-amber-50", textColor: "text-orange-700" },
        { path: "/HR/dashboard/salaries", label: "Salaries", icon: DollarSign, gradient: "from-yellow-500 to-amber-600", bgGradient: "from-yellow-50 to-amber-50", textColor: "text-yellow-700" },
        { path: "/HR/dashboard/notices", label: "Notices", icon: Megaphone, gradient: "from-red-500 to-rose-600", bgGradient: "from-red-50 to-rose-50", textColor: "text-red-700" },
        { path: "/HR/dashboard/attendances", label: "Attendances", icon: Clock, gradient: "from-indigo-500 to-blue-600", bgGradient: "from-indigo-50 to-blue-50", textColor: "text-indigo-700" },
        { path: "/HR/dashboard/recruitment", label: "Recruitment", icon: UserPlus, gradient: "from-pink-500 to-rose-600", bgGradient: "from-pink-50 to-rose-50", textColor: "text-pink-700" },
        { path: "/HR/dashboard/interview-insights", label: "Interview Insights", icon: BarChart3, gradient: "from-teal-500 to-cyan-600", bgGradient: "from-teal-50 to-cyan-50", textColor: "text-teal-700" },
        { path: "/HR/dashboard/hr-profiles", label: "HR Profiles", icon: UserCheck, gradient: "from-emerald-500 to-green-600", bgGradient: "from-emerald-50 to-green-50", textColor: "text-emerald-700" }
    ]

    return (
        <div className="w-full">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {testButtons.map((button, index) => {
                    const Icon = button.icon
                    return (
                        <Link key={index} to={button.path} className="group relative block">
                            {/* Glow Effect */}
                            <div className={`absolute -inset-0.5 bg-gradient-to-r ${button.gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                            
                            {/* Main Card */}
                            <div className={`relative bg-gradient-to-br ${button.bgGradient} backdrop-blur-sm border-2 border-gray-200/50 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 p-5 h-28 sm:h-32 flex flex-col items-center justify-center gap-3 overflow-hidden`}>
                                {/* Icon Container */}
                                <div className={`relative w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${button.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:rotate-6 group-hover:scale-110`}>
                                    <div className="absolute inset-0 bg-white/20 rounded-xl"></div>
                                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
                                </div>
                                
                                {/* Label */}
                                <span className={`text-xs sm:text-sm font-bold ${button.textColor} text-center leading-tight group-hover:scale-105 transition-transform duration-300`}>
                                    {button.label}
                                </span>
                                
                                {/* Shine Effect */}
                                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
