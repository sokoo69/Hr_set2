export default function handler(req, res) {
    res.status(200).json({ 
        message: 'Root API is working!',
        timestamp: new Date().toISOString()
    });
}
