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

    // Mock department data
    const departmentData = {
        success: true,
        message: "Departments fetched successfully",
        data: [
            {
                _id: "dept1",
                name: "Human Resources",
                description: "Manages employee relations, recruitment, and HR policies",
                employees: [
                    { _id: "emp1", firstname: "John", lastname: "Doe", email: "john.doe@company.com", contactnumber: "123-456-7890" },
                    { _id: "emp2", firstname: "Jane", lastname: "Smith", email: "jane.smith@company.com", contactnumber: "123-456-7891" }
                ],
                notice: [
                    { _id: "notice1", title: "HR Policy Update", audience: "All Employees", createdby: "HR Team" }
                ]
            },
            {
                _id: "dept2",
                name: "Information Technology",
                description: "Handles software development, system maintenance, and technical support",
                employees: [
                    { _id: "emp3", firstname: "Mike", lastname: "Johnson", email: "mike.johnson@company.com", contactnumber: "123-456-7892" },
                    { _id: "emp4", firstname: "Sarah", lastname: "Wilson", email: "sarah.wilson@company.com", contactnumber: "123-456-7893" }
                ],
                notice: [
                    { _id: "notice2", title: "System Maintenance", audience: "IT Department", createdby: "IT Manager" }
                ]
            },
            {
                _id: "dept3",
                name: "Finance",
                description: "Manages financial planning, budgeting, and accounting operations",
                employees: [
                    { _id: "emp5", firstname: "David", lastname: "Brown", email: "david.brown@company.com", contactnumber: "123-456-7894" }
                ],
                notice: [
                    { _id: "notice3", title: "Budget Review", audience: "Finance Team", createdby: "CFO" }
                ]
            }
        ]
    };

    return res.status(200).json(departmentData);
}
