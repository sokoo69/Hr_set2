import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { Building2, Users } from "lucide-react"

export const EntryPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex justify-center items-center p-4">
            <div className="max-w-4xl w-full">
                <div className="text-center mb-12">
                    <div className="mb-8">
                        <div className="mx-auto w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                            <Building2 className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-white" />
                        </div>
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
                        Welcome to 
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> HR Management System</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Streamline your human resources operations with our comprehensive management platform. 
                        Please select your role to proceed.
                    </p>
                </div>
                
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 max-w-2xl mx-auto">
                    <Link to={"/auth/employee/login"} className="w-full sm:w-auto">
                        <Button className="w-full sm:w-48 h-16 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
                            <Users className="w-6 h-6" />
                            Employee
                        </Button>
                    </Link>
                    <Link to={"/auth/HR/signup"} className="w-full sm:w-auto">
                        <Button className="w-full sm:w-48 h-16 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
                            <Building2 className="w-6 h-6" />
                            HR Admin
                        </Button>
                    </Link>
                </div>
                
                <div className="mt-16 text-center">
                    <p className="text-sm text-gray-500">
                        Secure • Reliable • Efficient
                    </p>
                </div>
            </div>
        </div>
    )
}