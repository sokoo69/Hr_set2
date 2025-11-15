import { createSlice } from "@reduxjs/toolkit";
import { HRAsyncReducer } from "../AsyncReducers/asyncreducer.js";
import { HandlePostHumanResources, HandleGetHumanResources } from "../Thunks/HRThunk.js";

// Load initial state from localStorage
const loadInitialState = () => {
    try {
        const persistedState = localStorage.getItem('hrAuthState');
        if (persistedState) {
            const parsed = JSON.parse(persistedState);
            return {
                data: parsed.data || null,
                isAuthenticated: parsed.isAuthenticated || false,
                isAuthourized: parsed.isAuthourized || false,
            };
        }
    } catch (error) {
        console.error('Error loading persisted state:', error);
    }
    return {
        data: null,
        isAuthenticated: false,
        isAuthourized: false,
    };
};

const initialState = {
    ...loadInitialState(),
    isLoading: false,
    isSignUp: false,
    isVerified: false,
    isVerifiedEmailAvailable : false, 
    isResetPassword: false,
    error: {
        status: false,  
        message: null,
        content: null
    }
};

const HRSlice = createSlice({
    name: "HumanResources",
    initialState,
    reducers: {
        clearHRState: (state) => {
            state.data = null;
            state.isAuthenticated = false;
            state.isAuthourized = false;
            localStorage.removeItem('hrAuthState');
        },
        setHRState: (state, action) => {
            state.data = action.payload.data;
            state.isAuthenticated = action.payload.isAuthenticated;
            state.isAuthourized = action.payload.isAuthourized;
            // Persist to localStorage
            try {
                localStorage.setItem('hrAuthState', JSON.stringify({
                    data: state.data,
                    isAuthenticated: state.isAuthenticated,
                    isAuthourized: state.isAuthourized,
                }));
            } catch (error) {
                console.error('Error persisting state:', error);
            }
        }
    },
    extraReducers: (builder) => {
        HRAsyncReducer(builder, HandlePostHumanResources)
        HRAsyncReducer(builder, HandleGetHumanResources)
        
        // Clear state on logout
        builder.addMatcher(
            (action) => {
                return (action.type === 'HandleGetHumanResources/fulfilled' && action.meta?.arg?.apiroute === 'LOGOUT') ||
                       (action.type === 'HandleGetHumanResources/rejected' && action.meta?.arg?.apiroute === 'CHECKLOGIN' && action.payload?.gologin)
            },
            (state) => {
                state.data = null;
                state.isAuthenticated = false;
                state.isAuthourized = false;
                localStorage.removeItem('hrAuthState');
            }
        );
    }
})

export const { clearHRState, setHRState } = HRSlice.actions;
export default HRSlice.reducer