
export default function handler(req, res) {
  const CLIENT_ID = process.env.CLIENT_ID;
  const redirect_uri = 'https://super-neko.vercel.app/api/auth/callback';
  const scope = 'tweet.read users.read';
  const state = 'state';
  const authUrl = 'https://twitter.com/i/oauth2/authorize?response_type=code&client_id=' + CLIENT_ID + '&redirect_uri=' + encodeURIComponent(redirect_uri) + '&scope=' + scope + '&state=' + state + '&code_challenge=challenge&code_challenge_method=plain';
  res.redirect(authUrl);
}
