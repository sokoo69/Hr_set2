export default function handler(req, res) {
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

    // Basic validation
    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: "Please provide email and password"
        });
    }

    // Mock authentication logic
    if (email === 'Shawon.saykot2023@gmail.com' && password === 'Shawon.saykot2023') {
        return res.status(200).json({
            success: true,
            message: "Login successful",
            type: "HRLogin",
            user: {
                email: email,
                firstname: "Shawon",
                lastname: "Saykot",
                role: 'HR-Admin',
                organizationName: "HR Management System"
            }
        });
    } else {
        return res.status(401).json({
            success: false,
            message: "Invalid email or password"
        });
    }
}