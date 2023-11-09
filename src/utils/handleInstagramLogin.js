import { INSTAGRAM_AUTH_URL } from "../auth/instagram/auth";

export const handleInstagramLogin = () => {
  window.location.href = INSTAGRAM_AUTH_URL;
};
