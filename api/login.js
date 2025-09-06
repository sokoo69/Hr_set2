import { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req, res) {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ 
            success: false, 
            message: 'Method not allowed' 
        });
    }

    const { email, password } = req.body;

    try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Mock authentication
        if (email === 'Shawon.saykot2023@gmail.com' && password === 'Shawon.saykot2023') {
            // Set cookie
            res.setHeader('Set-Cookie', 'HRtoken=mock-jwt-token-12345; Path=/; Max-Age=86400; HttpOnly; Secure; SameSite=Strict');
            
            return res.status(200).json({
                success: true,
                message: "HR Login Successfull",
                type: "HRLogin",
                token: 'mock-jwt-token-12345',
                user: {
                    email: email,
                    role: 'HR-Admin'
                }
            });
        } else {
            return res.status(400).json({
                success: false,
                message: "Invaild Credentials, Please Add Correct One",
                type: "HRLogin"
            });
        }

    } catch (error) {
        console.error('HR Login API Error:', error);
        return res.status(500).json({ 
            success: false, 
            message: error.message || 'Internal Server Error' 
        });
    }
}
