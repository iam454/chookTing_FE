const REDIRECT_URI =
  "https://k2bf481c846ffa.user-app.krampoline.com/kakao/callback";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
