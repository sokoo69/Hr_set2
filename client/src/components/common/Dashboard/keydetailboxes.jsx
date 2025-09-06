export const KeyDetailsBox = ({icon: Icon, dataname, data, color = "blue"}) => {
    const colorClasses = {
        blue: "from-blue-50 to-blue-100 group-hover:from-blue-100 group-hover:to-blue-200 text-blue-600",
        green: "from-green-50 to-green-100 group-hover:from-green-100 group-hover:to-green-200 text-green-600",
        purple: "from-purple-50 to-purple-100 group-hover:from-purple-100 group-hover:to-purple-200 text-purple-600",
        orange: "from-orange-50 to-orange-100 group-hover:from-orange-100 group-hover:to-orange-200 text-orange-600",
        yellow: "from-yellow-50 to-yellow-100 group-hover:from-yellow-100 group-hover:to-yellow-200 text-yellow-600",
        red: "from-red-50 to-red-100 group-hover:from-red-100 group-hover:to-red-200 text-red-600",
        indigo: "from-indigo-50 to-indigo-100 group-hover:from-indigo-100 group-hover:to-indigo-200 text-indigo-600",
        pink: "from-pink-50 to-pink-100 group-hover:from-pink-100 group-hover:to-pink-200 text-pink-600",
        teal: "from-teal-50 to-teal-100 group-hover:from-teal-100 group-hover:to-teal-200 text-teal-600",
        emerald: "from-emerald-50 to-emerald-100 group-hover:from-emerald-100 group-hover:to-emerald-200 text-emerald-600",
        cyan: "from-cyan-50 to-cyan-100 group-hover:from-cyan-100 group-hover:to-cyan-200 text-cyan-600"
    }

    return (
        <div className="keydetail-box-container w-full group">
            <div className="keydetails-content m-2 flex items-center justify-between bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:border-blue-300 p-4 sm:p-6">

                <div className="data-name-group flex flex-col gap-2 flex-1">
                    <div className="data">
                        <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                            {data || "0"}
                        </p>
                    </div>
                    <div className="dataname">
                        <p className="text-sm sm:text-base lg:text-lg font-semibold text-gray-600 capitalize">
                            {dataname}
                        </p>
                    </div>
                </div>

                <div className="data-icon flex-shrink-0 ml-4">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br rounded-full flex items-center justify-center transition-all duration-300 ${colorClasses[color]}`}>
                        {Icon ? (
                            <Icon className="w-6 h-6 sm:w-8 sm:h-8 group-hover:scale-110 transition-transform duration-300" />
                        ) : (
                            <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                        )}
                    </div>
                </div>

            </div>
        </div>
    )
}