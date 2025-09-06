import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export const EntryPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex justify-center items-center p-4">
            <div className="max-w-4xl w-full">
                <div className="text-center mb-12">
                    <div className="mb-8">
                        <img 
                            src="/welcome.png" 
                            alt="Welcome to HR Management System" 
                            className="mx-auto w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain drop-shadow-lg" 
                        />
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
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            Employee
                        </Button>
                    </Link>
                    <Link to={"/auth/HR/signup"} className="w-full sm:w-auto">
                        <Button className="w-full sm:w-48 h-16 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
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