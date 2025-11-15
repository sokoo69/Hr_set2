# 🚀 Project Run করার Complete Guide

## 📋 Prerequisites (প্রয়োজনীয় জিনিস)
- ✅ Node.js (version 18 বা তার বেশি)
- ✅ npm (version 8 বা তার বেশি)
- ✅ MongoDB Database (MongoDB Atlas বা Local MongoDB)

---

## 🔧 Step 1: Environment Variables Setup করুন

### Server এর জন্য `.env` file তৈরি করুন:

`server/.env` file তৈরি করুন এবং এই variables গুলো add করুন:

```env
# MongoDB Connection (এটা সবচেয়ে গুরুত্বপূর্ণ!)
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/hr_management?retryWrites=true&w=majority

# JWT Secret Keys
JWT_SECRET=your_jwt_secret_key_here
JWT_SECRET_HR=your_hr_jwt_secret_key_here
JWT_SECRET_EMPLOYEE=your_employee_jwt_secret_key_here

# Server Port (optional, default 5000)
PORT=5000

# Node Environment
NODE_ENV=development

# Client URL (CORS এর জন্য)
CLIENT_URL=http://localhost:5173
```

**⚠️ Important:** 
- `MONGODB_URI` অবশ্যই set করতে হবে, নাহলে database connect হবে না
- MongoDB Atlas use করলে connection string এ password replace করুন
- Local MongoDB use করলে: `mongodb://localhost:27017/hr_management`

---

## 📦 Step 2: Dependencies Install করুন

### Root directory থেকে সব dependencies install করুন:
```bash
npm run install-all
```

এটা automatically:
- Client dependencies install করবে
- Server dependencies install করবে

**অথবা আলাদা আলাদা:**
```bash
# Client dependencies
npm run install-client

# Server dependencies  
npm run install-server
```

---

## 🗄️ Step 3: Database Connection Check করুন

### Database connection verify করার জন্য:

**Option 1: Health Check API (Server run করার পর)**
```bash
curl http://localhost:5000/api/health
```

**Option 2: Server logs check করুন**
Server start করার পর terminal এ দেখবেন:
- ✅ `MongoDB connected successfully! Database: hr_management`
- ❌ `Error connecting to MongoDB:` (যদি error হয়)

---

## 🖥️ Step 4: Server Run করুন

### Terminal 1 - Server Start করুন:

```bash
cd server
npm run dev
```

**Expected Output:**
```
Attempting to connect to MongoDB...
MongoDB connected successfully! Database: hr_management
Server is running on port 5000
```

**✅ Success Indicators:**
- `MongoDB connected successfully!` message দেখবেন
- `Server is running on port 5000` দেখবেন
- কোনো error message না দেখবেন

**❌ Error হলে:**
- `.env` file check করুন
- `MONGODB_URI` correct আছে কিনা verify করুন
- MongoDB service running আছে কিনা check করুন

---

## 💻 Step 5: Client Run করুন

### Terminal 2 - Client Start করুন:

```bash
cd client
npm run dev
```

**Expected Output:**
```
  VITE v7.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

---

## ✅ Step 6: Browser এ Open করুন

1. Browser এ যান: `http://localhost:5173`
2. HR Login: `http://localhost:5173/auth/hr/login`
3. Employee Login: `http://localhost:5173/auth/employee/login`

---

## 🔍 Database Connection Troubleshooting

### Problem: "MongoDB connection error" বা "Database not connected"

**Solution 1: .env file check করুন**
```bash
cd server
cat .env | grep MONGODB_URI
```

**Solution 2: MongoDB URI format check করুন**
- ✅ Correct: `mongodb+srv://user:pass@cluster.mongodb.net/dbname`
- ❌ Wrong: `mongodb://user:pass@cluster.mongodb.net` (missing database name)

**Solution 3: MongoDB Atlas এর জন্য:**
- Network Access → IP Address add করুন (0.0.0.0/0 for all)
- Database Access → User password correct আছে কিনা check করুন

**Solution 4: Local MongoDB এর জন্য:**
```bash
# MongoDB service start করুন
# macOS:
brew services start mongodb-community

# Linux:
sudo systemctl start mongod

# Windows:
net start MongoDB
```

**Solution 5: Health Check API test করুন**
```bash
# Server run করার পর
curl http://localhost:5000/api/health

# Expected response:
# {
#   "success": true,
#   "message": "Server is running",
#   "database": "connected",
#   "dbState": 1
# }
```

---

## 🚨 Common Errors & Solutions

### Error 1: "MONGODB_URI is not defined"
**Solution:**
```bash
# server/.env file এ MONGODB_URI add করুন
echo "MONGODB_URI=your_connection_string" >> server/.env
```

### Error 2: "Port 5000 already in use"
**Solution:**
```bash
# Port 5000 kill করুন
lsof -ti:5000 | xargs kill -9

# বা অন্য port use করুন (.env এ PORT=5001)
```

### Error 3: "Module not found"
**Solution:**
```bash
# Dependencies আবার install করুন
npm run install-all
```

### Error 4: "Unauthorized access" বা Cookie issues
**Solution:**
- Browser cookies clear করুন
- Development mode এ `NODE_ENV=development` set করুন
- `CLIENT_URL=http://localhost:5173` .env এ add করুন

---

## 📝 Complete Run Commands (একসাথে)

### Quick Start (সব একসাথে):

**Terminal 1 (Server):**
```bash
cd /Users/shawon/Documents/Hr_set2/server && npm run dev
```

**Terminal 2 (Client):**
```bash
cd /Users/shawon/Documents/Hr_set2/client && npm run dev
```

### Production Build:
```bash
# Build client
npm run build

# Start server (production)
cd server && npm start
```

---

## 🎯 Development Workflow (Daily Use)

1. **Terminal 1:** `cd server && npm run dev` (Server start)
2. **Terminal 2:** `cd client && npm run dev` (Client start)
3. **Browser:** `http://localhost:5173` open করুন
4. **Check:** Server logs এ `MongoDB connected successfully!` দেখবেন
5. **Test:** Login করুন এবং dashboard check করুন

---

## ✅ Database Connection Verification

### Server start করার পর check করুন:

1. **Terminal logs:**
   ```
   ✅ MongoDB connected successfully! Database: hr_management
   ✅ Server is running on port 5000
   ```

2. **Health Check API:**
   ```bash
   curl http://localhost:5000/api/health
   ```
   Response এ `"database": "connected"` দেখবেন

3. **Browser Console:**
   - F12 → Network tab
   - API calls successful দেখবেন
   - No "Unauthorized" errors

---

## 📞 Help & Support

### Logs Check করুন:
- **Server logs:** Terminal 1 (server running এর terminal)
- **Client logs:** Browser console (F12)
- **Database logs:** MongoDB Atlas dashboard বা local MongoDB logs

### Common Issues:
- Database not connecting → `.env` file check করুন
- Port conflicts → `lsof -ti:5000 | xargs kill -9`
- Module errors → `npm run install-all`

---

## 🎉 Success Checklist

Before starting development, verify:
- ✅ `.env` file exists in `server/` directory
- ✅ `MONGODB_URI` is set correctly
- ✅ Server shows "MongoDB connected successfully!"
- ✅ Client runs on `http://localhost:5173`
- ✅ Health check API returns `"database": "connected"`
- ✅ Can login and access dashboard

---

**Happy Coding! 🚀**

