export default async function handler(req, res) { 
  const codeVerifier = req .cookies.code_verifier;
  const { code, state } = req.query;
  const CLIENT_ID = process.env.CLIENT_ID;
  const CLIENT_SECRET = process.env.CLIENT_SECRET;
  const redirect_uri = 'https://super-neko.vercel.app/api/auth/callback';

  const tokenResponse = await fetch('https://api.twitter.com/2/oauth2/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + Buffer.from(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64'),
    },
    body: new URLSearchParams({
      code: code,
      grant_type: 'authorization_code',
      client_id: CLIENT_ID,
      redirect_uri: redirect_uri,
      code_verifier: codeVerifier,
    }),
  });

  const tokenData = await tokenResponse.json();

  if (tokenData.access_token) {
    res.status(200).json({ message: 'Authentication successful', token: tokenData.access_token });
  } else {
    res.status(400).json({ message: 'Authentication failed', error: tokenData });
  }
}
