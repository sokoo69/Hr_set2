import { useState, useEffect } from "react"
import { X, CheckCircle } from "lucide-react"

export const SuccessPopup = ({ message, onClose }) => {
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false)
            if (onClose) onClose()
        }, 3000)

        return () => clearTimeout(timer)
    }, [onClose])

    if (!isVisible) return null

    return (
        <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-top-2 duration-300">
            <div className="bg-white border-l-4 border-green-500 shadow-lg rounded-lg p-4 max-w-sm w-full">
                <div className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                            <CheckCircle className="w-5 h-5 text-green-600" />
                        </div>
                    </div>
                    <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-semibold text-gray-900 mb-1">Success</h3>
                        <p className="text-sm text-gray-600">{message}</p>
                    </div>
                    <button
                        onClick={() => {
                            setIsVisible(false)
                            if (onClose) onClose()
                        }}
                        className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    )
}
