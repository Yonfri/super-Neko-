export default function handler(req, res) 
{ const CLIENT_ID = process.env.CLIENT_ID; 
 const CLIENT_SECRET = process.env.CLIENT_SECRET; 
 res.status(200).json({ message: 'Auth configured' }); }
