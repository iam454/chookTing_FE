import { KAKAO_AUTH_URL } from "../auth/kakao/auth";

export const handleKaKaoLogin = () => {
  window.location.href = KAKAO_AUTH_URL;
};
