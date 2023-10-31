const REDIRECT_URI = "http://localhost:3000/instagram/callback";

export const INSTAGRAM_AUTH_URL = `https://api.instagram.com/oauth/authorize?client_id=${process.env.REACT_APP_INSTAGRAM_CLIENT_ID}&redirect_uri=${REDIRECT_URI}/instagram/callback&scope=user_profile,user_media&response_type=code`;
