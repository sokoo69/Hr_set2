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

    const { firstname, lastname, email, contactnumber, password, textpassword, name, description, OrganizationURL, OrganizationMail } = req.body;

    // Basic validation
    if (!email || !password || !firstname || !lastname || !contactnumber || !name || !description || !OrganizationURL || !OrganizationMail) {
        return res.status(400).json({ 
            success: false, 
            message: "Please fill in all required fields" 
        });
    }

    if (password !== textpassword) {
        return res.status(400).json({ 
            success: false, 
            message: "Passwords do not match" 
        });
    }

    // Mock check if email already exists
    if (email === 'Shawon.saykot2023@gmail.com') {
        return res.status(409).json({ 
            success: false, 
            message: "Email already exists. Please use a different email or try logging in." 
        });
    }

    // Mock successful signup
    return res.status(200).json({
        success: true,
        message: "HR account created successfully! Please check your email for verification.",
        type: "HRSignup",
        user: {
            email: email,
            firstname: firstname,
            lastname: lastname,
            role: 'HR-Admin',
            organizationName: name
        }
    });
}
