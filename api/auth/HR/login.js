// Vercel serverless function for HR login
export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  
  if (req.method === 'POST') {
    try {
      console.log('HR Login request received:', req.body);
      
      // For now, let's create a simple mock response to test
      // TODO: Connect to actual database
      const { email, password } = req.body;
      
      if (email === 'Shawon.saykot2023@gmail.com' && password === 'Shawon.saykot2023') {
        res.status(200).json({
          success: true,
          message: 'Login successful',
          token: 'mock-jwt-token-12345',
          user: {
            email: email,
            role: 'HR'
          }
        });
      } else {
        res.status(401).json({
          success: false,
          message: 'Invalid credentials'
        });
      }
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ 
        success: false,
        error: 'Internal server error',
        message: error.message 
      });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
