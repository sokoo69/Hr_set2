export const KeyDetailsBox = ({icon: Icon, dataname, data, color = "blue"}) => {
    const colorConfig = {
        blue: {
            gradient: "from-blue-500 to-indigo-600",
            bgGradient: "from-blue-50 via-blue-100/50 to-indigo-50",
            textColor: "text-blue-600",
            borderColor: "border-blue-200/50",
            glowColor: "from-blue-500/20 to-indigo-500/20"
        },
        green: {
            gradient: "from-green-500 to-emerald-600",
            bgGradient: "from-green-50 via-emerald-100/50 to-teal-50",
            textColor: "text-green-600",
            borderColor: "border-green-200/50",
            glowColor: "from-green-500/20 to-emerald-500/20"
        },
        purple: {
            gradient: "from-purple-500 to-pink-600",
            bgGradient: "from-purple-50 via-pink-100/50 to-fuchsia-50",
            textColor: "text-purple-600",
            borderColor: "border-purple-200/50",
            glowColor: "from-purple-500/20 to-pink-500/20"
        },
        orange: {
            gradient: "from-orange-500 to-amber-600",
            bgGradient: "from-orange-50 via-amber-100/50 to-yellow-50",
            textColor: "text-orange-600",
            borderColor: "border-orange-200/50",
            glowColor: "from-orange-500/20 to-amber-500/20"
        }
    }

    const config = colorConfig[color] || colorConfig.blue

    return (
        <div className="keydetail-box-container w-full group relative">
            {/* Glow Effect */}
            <div className={`absolute -inset-0.5 bg-gradient-to-r ${config.glowColor} rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            
            {/* Main Card */}
            <div className={`relative bg-gradient-to-br ${config.bgGradient} backdrop-blur-sm border ${config.borderColor} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-1 p-5 sm:p-6 overflow-hidden`}>
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.1)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]"></div>
                </div>

                <div className="relative flex items-center justify-between">
                    <div className="data-name-group flex flex-col gap-2 flex-1 z-10">
                        <div className="data">
                            <p className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r ${config.gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                                {data || "0"}
                            </p>
                        </div>
                        <div className="dataname">
                            <p className={`text-sm sm:text-base lg:text-lg font-bold ${config.textColor} capitalize tracking-wide`}>
                                {dataname}
                            </p>
                        </div>
                    </div>

                    <div className="data-icon flex-shrink-0 ml-4 z-10">
                        <div className={`relative w-14 h-14 sm:w-18 sm:h-18 bg-gradient-to-br ${config.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:rotate-6 group-hover:scale-110`}>
                            <div className="absolute inset-0 bg-white/20 rounded-2xl"></div>
                            {Icon ? (
                                <Icon className="w-7 h-7 sm:w-9 sm:h-9 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
                            ) : (
                                <svg className="w-7 h-7 sm:w-9 sm:h-9 text-white relative z-10" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                </svg>
                            )}
                        </div>
                    </div>
                </div>

                {/* Shine Effect on Hover */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            </div>
        </div>
    )
}