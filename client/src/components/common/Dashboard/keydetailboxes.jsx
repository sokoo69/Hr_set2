export const KeyDetailsBox = ({image, dataname, data}) => {
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

                <div className="data-image flex-shrink-0 ml-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full flex items-center justify-center group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300">
                        <img 
                            src={image} 
                            alt={dataname} 
                            className="w-6 h-6 sm:w-8 sm:h-8 object-contain filter group-hover:scale-110 transition-transform duration-300"
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'block';
                            }}
                        />
                        <div className="hidden w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}