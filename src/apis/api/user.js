import { instance } from "..";

export const kakaoLogin = (payload) => {
  return instance.post("/login", payload);
};

export const instagramConnect = (payload) => {
  return instance.post("/user/instagram", payload);
};

export const fetchUserInfos = () => {
  return instance.get("/user/info");
};

export const kakaoLogout = () => {
  return instance.post("/user/logout");
};

export const deleteUser = () => {
  return instance.delete("/user/account");
};
