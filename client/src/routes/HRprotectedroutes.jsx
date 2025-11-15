import { HandleGetHumanResources } from "../redux/Thunks/HRThunk.js"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { Loading } from "../components/common/loading.jsx"

export const HRProtectedRoutes = ({ children }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const HRState = useSelector((state) => state.HRReducer)
    const [isCheckingAuth, setIsCheckingAuth] = useState(true)

    // Check authentication on mount and page refresh
    useEffect(() => {
        const checkAuthentication = async () => {
            // If already authenticated, skip check
            if (HRState.isAuthenticated && HRState.isAuthourized) {
                setIsCheckingAuth(false)
                return
            }

            // Check if there's a persisted state in localStorage
            const persistedState = localStorage.getItem('hrAuthState')
            if (persistedState) {
                try {
                    const parsed = JSON.parse(persistedState)
                    if (parsed.isAuthenticated && parsed.isAuthourized) {
                        // Verify token with backend
                        try {
                            const result = await dispatch(HandleGetHumanResources({ apiroute: "CHECKLOGIN" })).unwrap()
                            if (result && result.success && result.data) {
                                setIsCheckingAuth(false)
                                return
                            }
                        } catch (error) {
                            // Token invalid, clear state
                            console.error('Token verification failed:', error)
                            localStorage.removeItem('hrAuthState')
                            setIsCheckingAuth(false)
                            return
                        }
                    }
                } catch (error) {
                    console.error('Error checking authentication:', error)
                    localStorage.removeItem('hrAuthState')
                }
            }
            
            setIsCheckingAuth(false)
        }

        // Only check on mount, not on every state change
        checkAuthentication()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // Show loading while checking authentication
    if (isCheckingAuth || HRState.isLoading) {
        return (
            <Loading />
        )
    }

    return (
        (HRState.isAuthenticated && HRState.isAuthourized) ? children : <Navigate to="/" />
    )
}