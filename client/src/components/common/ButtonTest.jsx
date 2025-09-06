import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Users, Building2, Calendar, FileText, DollarSign, Megaphone, Clock, UserPlus, BarChart3, UserCheck } from "lucide-react"

export const ButtonTest = () => {
    const testButtons = [
        { path: "/HR/dashboard/employees", label: "Employees", icon: Users, color: "blue" },
        { path: "/HR/dashboard/departments", label: "Departments", icon: Building2, color: "green" },
        { path: "/HR/dashboard/leaves", label: "Leaves", icon: Calendar, color: "purple" },
        { path: "/HR/dashboard/requestes", label: "Requests", icon: FileText, color: "orange" },
        { path: "/HR/dashboard/salaries", label: "Salaries", icon: DollarSign, color: "yellow" },
        { path: "/HR/dashboard/notices", label: "Notices", icon: Megaphone, color: "red" },
        { path: "/HR/dashboard/attendances", label: "Attendances", icon: Clock, color: "indigo" },
        { path: "/HR/dashboard/recruitment", label: "Recruitment", icon: UserPlus, color: "pink" },
        { path: "/HR/dashboard/interview-insights", label: "Interview Insights", icon: BarChart3, color: "teal" },
        { path: "/HR/dashboard/hr-profiles", label: "HR Profiles", icon: UserCheck, color: "emerald" }
    ]

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Navigation Test</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {testButtons.map((button, index) => {
                    const Icon = button.icon
                    return (
                        <Link key={index} to={button.path}>
                            <Button className="w-full h-20 flex flex-col items-center justify-center gap-2 bg-white border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-200">
                                <Icon className="w-6 h-6" />
                                <span className="text-xs text-center">{button.label}</span>
                            </Button>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
