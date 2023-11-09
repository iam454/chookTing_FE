const REDIRECT_URI =
  "https://k2bf481c846ffa.user-app.krampoline.com/instagram/callback";

export const INSTAGRAM_AUTH_URL = `https://api.instagram.com/oauth/authorize?client_id=${process.env.REACT_APP_INSTAGRAM_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=user_profile,user_media&response_type=code`;
