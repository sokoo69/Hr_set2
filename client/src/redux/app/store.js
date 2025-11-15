import { configureStore } from '@reduxjs/toolkit'
import EmployeeReducer from "../Slices/EmployeeSlice.js"
import HRReducer from '../Slices/HRSlice.js'
import DashboardReducer from "../Slices/DashboardSlice.js"
import HREmployeesPageReducer from '../Slices/HREmployeesPageSlice.js'
import HRDepartmentPageReducer from '../Slices/HRDepartmentPageSlice.js'
import EMployeesIDReducer from '../Slices/EmployeesIDsSlice.js'
import EmployeeDashboardReducer from '../Reducers/EmployeeDashboardReducer.js'
import SalaryReducer from '../Reducers/SalaryReducer.js'
import LeaveReducer from '../Reducers/LeaveReducer.js'
import RequestReducer from '../Reducers/RequestReducer.js'
import NoticeReducer from '../Reducers/NoticeReducer.js'
import AttendanceReducer from '../Reducers/AttendanceReducer.js'
import RecruitmentReducer from '../Reducers/RecruitmentReducer.js'
import InterviewInsightsReducer from '../Reducers/InterviewInsightsReducer.js'

export const store = configureStore({
    reducer: {
        employeereducer: EmployeeReducer,
        HRReducer: HRReducer,
        dashboardreducer: DashboardReducer,
        HREmployeesPageReducer : HREmployeesPageReducer,
        HRDepartmentPageReducer : HRDepartmentPageReducer,
        EMployeesIDReducer : EMployeesIDReducer,
        employeeDashboardReducer: EmployeeDashboardReducer,
        SalaryReducer: SalaryReducer,
        LeaveReducer: LeaveReducer,
        RequestReducer: RequestReducer,
        NoticesReducer: NoticeReducer,
        AttendancesReducer: AttendanceReducer,
        RecruitmentReducer: RecruitmentReducer,
        InterviewInsightsReducer: InterviewInsightsReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                // Ignore these action types
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
            },
        }),
    devTools: process.env.NODE_ENV !== 'production',
})