import jwt from 'jsonwebtoken'

export const GenerateJwtTokenAndSetCookiesEmployee = (res, EMid, EMrole, ORGID) => {
    // Use JWT_SECRET_EMPLOYEE if available, otherwise fall back to JWT_SECRET
    const secret = process.env.JWT_SECRET_EMPLOYEE || process.env.JWT_SECRET
    const token = jwt.sign({ EMid, EMrole, ORGID }, secret, { expiresIn: '7d' })

    const isProduction = process.env.NODE_ENV === 'production'
    
    res.cookie("EMtoken", token, {
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: isProduction, // Only secure in production (HTTPS)
        sameSite: isProduction ? "none" : "lax", // Use "lax" for localhost, "none" for production
    })

    return token
}

export const GenerateJwtTokenAndSetCookiesHR = (res, HRid, HRrole, ORGID) => {
    // Use JWT_SECRET_HR if available, otherwise fall back to JWT_SECRET
    const secret = process.env.JWT_SECRET_HR || process.env.JWT_SECRET
    const token = jwt.sign({ HRid, HRrole, ORGID }, secret, { expiresIn: '7d' })

    const isProduction = process.env.NODE_ENV === 'production'
    
    res.cookie("HRtoken", token, {
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: isProduction, // Only secure in production (HTTPS)
        sameSite: isProduction ? "none" : "lax", // Use "lax" for localhost, "none" for production
    })

    return token
}