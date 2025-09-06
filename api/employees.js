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

    if (req.method !== 'GET') {
        return res.status(405).json({
            success: false,
            message: 'Method not allowed'
        });
    }

    // Mock employee data
    const employeeData = {
        success: true,
        message: "Employees fetched successfully",
        data: [
            {
                _id: "emp1",
                firstname: "John",
                lastname: "Doe",
                email: "john.doe@company.com",
                contactnumber: "123-456-7890",
                department: { name: "Information Technology" },
                position: "Software Developer",
                joinDate: "2023-01-15",
                status: "Active"
            },
            {
                _id: "emp2",
                firstname: "Jane",
                lastname: "Smith",
                email: "jane.smith@company.com",
                contactnumber: "123-456-7891",
                department: { name: "Human Resources" },
                position: "HR Specialist",
                joinDate: "2023-02-20",
                status: "Active"
            },
            {
                _id: "emp3",
                firstname: "Mike",
                lastname: "Johnson",
                email: "mike.johnson@company.com",
                contactnumber: "123-456-7892",
                department: { name: "Finance" },
                position: "Financial Analyst",
                joinDate: "2023-03-10",
                status: "Active"
            },
            {
                _id: "emp4",
                firstname: "Sarah",
                lastname: "Wilson",
                email: "sarah.wilson@company.com",
                contactnumber: "123-456-7893",
                department: { name: "Marketing" },
                position: "Marketing Manager",
                joinDate: "2023-04-05",
                status: "Active"
            },
            {
                _id: "emp5",
                firstname: "David",
                lastname: "Brown",
                email: "david.brown@company.com",
                contactnumber: "123-456-7894",
                department: { name: "Operations" },
                position: "Operations Manager",
                joinDate: "2023-05-12",
                status: "Active"
            }
        ]
    };

    return res.status(200).json(employeeData);
}
