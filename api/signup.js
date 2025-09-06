export default function handler(req, res) {
    res.status(200).json({ 
        success: true,
        message: "HR account created successfully!",
        type: "HRSignup",
        user: {
            email: req.body.email,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            role: 'HR-Admin'
        }
    });
}