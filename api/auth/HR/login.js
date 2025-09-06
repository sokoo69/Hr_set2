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
      
      const { email, password } = req.body;
      
      if (email === 'Shawon.saykot2023@gmail.com' && password === 'Shawon.saykot2023') {
        // Set a mock JWT token cookie
        res.setHeader('Set-Cookie', 'HRtoken=mock-jwt-token-12345; HttpOnly; Secure; SameSite=Lax; Max-Age=86400');
        
        res.status(200).json({
          success: true,
          message: 'HR Login Successfull',
          type: 'HRLogin',
          token: 'mock-jwt-token-12345',
          user: {
            email: email,
            role: 'HR-Admin'
          }
        });
      } else {
        res.status(400).json({
          success: false,
          message: 'Invaild Credentials, Please Add Correct One',
          type: 'HRLogin'
        });
      }
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ 
        success: false,
        message: 'Internal Server Error',
        error: error.message,
        type: 'HRLogin'
      });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}