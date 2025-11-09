import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv'
import path from 'path';
import { fileURLToPath } from 'url';
import EmployeeAuthRouter from './routes/EmployeeAuth.route.js'
import HRAuthrouter from './routes/HRAuth.route.js'
import DashboardRouter from './routes/Dashboard.route.js'
import EmployeeRouter from './routes/Employee.route.js'
import HRRouter from './routes/HR.route.js'
import DepartmentRouter from './routes/Department.route.js'
import SalaryRouter from './routes/Salary.route.js'
import NoticeRouter from "./routes/Notice.route.js"
import LeaveRouter from './routes/Leave.route.js'
import AttendanceRouter from './routes/Attendance.route.js'
import RecruitmentRouter from './routes/Recruitment.route.js'
import ApplicantRouter from './routes/Applicant.route.js'
import InterviewInsightRouter from './routes/InterviewInsights.route.js'
import GenerateRequestRouter from './routes/GenerateRequest.route.js'
import CorporateCalendarRouter from './routes/CorporateCalendar.route.js'
import BalanceRouter from './routes/Balance.route.js'
import { ConnectDB } from './config/connectDB.js';
import cookieParser from 'cookie-parser';
import cors from "cors"


dotenv.config()
const app = express();

// Initialize database connection for Vercel serverless
let dbConnected = false;
const connectDatabase = async () => {
  if (!dbConnected) {
    try {
      await ConnectDB();
      dbConnected = true;
    } catch (error) {
      console.error('Database connection error:', error.message);
      // Don't exit in serverless - let requests handle the error
    }
  }
};

// ES module __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(bodyParser.json())
app.use(cookieParser())

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, '../client/dist')));


app.use(cors({
  origin: [
    "http://localhost:3000", 
    "http://localhost:5173", 
    "http://localhost:5174",
    "https://hr-set2-client.vercel.app",
    "https://hr-set2-client-8wy89r5gg-shawons-projects-2380d384.vercel.app",
    "https://hr-set2-hltq2cm5q-shawons-projects-2380d384.vercel.app",
    /\.vercel\.app$/, // Allow all Vercel preview deployments
  ], // Support multiple client ports and Vercel domains
  credentials: true, // This is optional and depends on whether you're using cookies
}));
// app.options('*', cors())

app.use("/api/auth/employee", EmployeeAuthRouter) 

app.use("/api/auth/HR", HRAuthrouter)

app.use("/api/v1/dashboard", DashboardRouter) 

app.use("/api/v1/employee", EmployeeRouter)

app.use("/api/v1/HR", HRRouter)

app.use("/api/v1/department", DepartmentRouter)

app.use("/api/v1/salary", SalaryRouter)

app.use("/api/v1/notice", NoticeRouter)

app.use("/api/v1/leave", LeaveRouter)

app.use("/api/v1/attendance", AttendanceRouter)

app.use("/api/v1/recruitment", RecruitmentRouter)

app.use("/api/v1/applicant", ApplicantRouter)

app.use("/api/v1/interview-insights", InterviewInsightRouter)

app.use("/api/v1/generate-request", GenerateRequestRouter)

app.use("/api/v1/corporate-calendar", CorporateCalendarRouter)

app.use("/api/v1/balance", BalanceRouter)

// Middleware to ensure database connection before handling requests
app.use(async (req, res, next) => {
  // Skip database connection for health check
  if (req.path === '/api/health') {
    return next();
  }
  await connectDatabase();
  next();
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.status(200).json({ 
    success: true, 
    message: "Server is running", 
    timestamp: new Date().toISOString(),
    database: dbConnected ? "connected" : "not connected"
  });
});

// Catch all handler: send back React's index.html file for any non-API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

// For Vercel deployment
export default app;

// For Heroku deployment
const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  try {
    await ConnectDB()
    console.log(`Server running on port ${PORT}`)
  } catch (error) {
    console.log('Database connection failed, but server is running in mock mode:', error.message)
    console.log(`Server running on port ${PORT}`)
  }
})