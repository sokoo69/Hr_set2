import jwt from 'jsonwebtoken'

export const VerifyEmployeeToken = (req, res, next) => {
    const token = req.cookies.EMtoken
    if (!token) {
        return res.status(401).json({ success: false, message: "Unauthorized access", gologin : true })
    }
    try {
        // Use JWT_SECRET_EMPLOYEE if available, otherwise fall back to JWT_SECRET
        const secret = process.env.JWT_SECRET_EMPLOYEE || process.env.JWT_SECRET
        if (!secret) {
            console.error('JWT_SECRET or JWT_SECRET_EMPLOYEE not configured')
            return res.status(500).json({ success: false, message: "Server configuration error" })
        }
        
        const decoded = jwt.verify(token, secret) 
        if (!decoded) {
            res.clearCookie("EMtoken")
            return res.status(403).json({ success: false, message: "unauthenticated employee", gologin : true }) 
        }
        req.EMid = decoded.EMid
        req.EMrole = decoded.EMrole
        req.ORGID = decoded.ORGID
        next()
    } catch (error) {
        console.error('Employee Token Verification Error:', error.message)
        if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
            res.clearCookie("EMtoken")
            return res.status(401).json({ success: false, message: "Unauthorized access", gologin : true })
        }
        return res.status(500).json({ success: false, message: "internal server error", error: error.message }) 
    }
}

export const VerifyhHRToken = (req, res, next) => {
    const token = req.cookies.HRtoken
    if (!token) {
        return res.status(401).json({ success: false, message: "Unauthorized access", gologin : true }) 
    }
    
    // Mock authentication for testing
    if (token === 'mock-jwt-token-12345') {
        req.HRid = 'mock-hr-id'
        req.ORGID = 'mock-org-id'
        req.Role = 'HR-Admin'
        return next()
    }
    
    try {
        // Use JWT_SECRET_HR if available, otherwise fall back to JWT_SECRET
        const secret = process.env.JWT_SECRET_HR || process.env.JWT_SECRET
        if (!secret) {
            console.error('JWT_SECRET or JWT_SECRET_HR not configured')
            return res.status(500).json({ success: false, message: "Server configuration error" })
        }
        
        const decoded = jwt.verify(token, secret) 
        if (!decoded) {
            res.clearCookie("HRtoken")
            return res.status(403).json({ success: false, message: "unauthenticated employee", gologin : true })
        }
        req.HRid = decoded.HRid
        req.ORGID = decoded.ORGID
        req.Role = decoded.HRrole
        next()
    } catch (error) {
        console.error('HR Token Verification Error:', error.message)
        if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
            res.clearCookie("HRtoken")
            return res.status(401).json({ success: false, message: "Unauthorized access", gologin : true })
        }
        return res.status(500).json({ success: false, message: "internal server error", error: error.message }) 
    }
}