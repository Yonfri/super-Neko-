import crypto from 'node:crypto';
  const CLIENT_ID = process.env.CLIENT_ID;
const codeVerifier = crypto.randomUUID();\
const codeChallenge = crypto.createHash('sha256').update(codeVerifier).digest('base64url');
res.setHeader('Set-Cookie', 'code_verifier=' + codeVerifier + '; HttpOnly; Path=/; Max-Age=600; SameSite=Lax');
export default function handler(req, res) {
  const redirect_uri = 'https://super-neko.vercel.app/api/auth/callback';
  const scope = 'tweet.read users.read';
  const state = 'state';
  const authUrl = 'https://twitter.com/i/oauth2/authorize?response_type=code&client_id=' + CLIENT_ID + '&redirect_uri=' + encodeURIComponent(redirect_uri) + '&scope=' + scope + '&state=' + state + "&code_challenge=${codeChallenge}&code_challenge_method=S256" 
  res.redirect(authUrl);
}
