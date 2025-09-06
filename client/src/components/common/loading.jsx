export const Loading = ({ height, message = "Loading..." }) => {
    return (
        <div className={`${height ? height : `h-screen`} w-full flex flex-col justify-center items-center gap-6 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50`}>
            <div className="relative">
                {/* Outer ring */}
                <div className="w-16 h-16 border-4 border-blue-200 rounded-full animate-spin"></div>
                {/* Inner ring */}
                <div className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-t-blue-600 rounded-full animate-spin"></div>
                {/* Center dot */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
            </div>
            
            <div className="text-center">
                <p className="text-xl font-semibold text-gray-700 mb-2">{message}</p>
                <div className="flex space-x-1 justify-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
            </div>
        </div>
    )
}