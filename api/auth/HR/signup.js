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

    try {
        const { firstname, lastname, email, contactnumber, textpassword, password, name, description, OrganizationURL, OrganizationMail } = req.body;

        console.log('HR Signup request received:', { email, firstname, lastname });

        // Basic validation
        if (!email || !textpassword || !firstname || !lastname) {
            return res.status(400).json({
                success: false,
                message: "Please fill in all required fields"
            });
        }

        // Check if email already exists (mock check)
        if (email === 'Shawon.saykot2023@gmail.com') {
            return res.status(400).json({
                success: false,
                message: "Email already exists. Please use a different email or try logging in."
            });
        }

        // Check password match
        if (textpassword !== password) {
            return res.status(400).json({
                success: false,
                message: "Passwords do not match"
            });
        }

        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Mock successful signup
        const response = {
            success: true,
            message: "HR account created successfully! Please check your email for verification.",
            type: "HRSignup",
            user: {
                email: email,
                firstname: firstname,
                lastname: lastname,
                role: 'HR-Admin',
                organization: {
                    name: name || 'Default Organization',
                    description: description || 'Organization description',
                    url: OrganizationURL || '',
                    email: OrganizationMail || email
                }
            }
        };

        console.log('HR Signup successful:', response);
        return res.status(200).json(response);

    } catch (error) {
        console.error('HR Signup error:', error);
        return res.status(500).json({
            success: false,
            message: "Internal server error during signup"
        });
    }
}
