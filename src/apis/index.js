import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

const reissueToken = async (base) => {
  try {
    const response = await base.post("/reissue");
    const newToken = response.headers.authorization;
    localStorage.setItem("token", newToken);
    return newToken;
  } catch (error) {
    throw new Error("토큰 재발급에 실패했습니다.");
  }
};

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = token;
  }
  return config;
});

instance.interceptors.response.use(
  (res) => res,
  async (err) => {
    if (err.response?.data?.error.code === "4111") {
      localStorage.removeItem("token");
      const token = await reissueToken(instance);
      if (token) {
        err.config.headers["Authorization"] = token;
      }
      return axios.request(err.config);
    }
    return Promise.reject(err);
  }
);

export const uploadInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 3000,
  headers: {
    "Content-Type": "multipart/form-data",
  },
  withCredentials: true,
});

uploadInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = token;
  }
  return config;
});

uploadInstance.interceptors.response.use(
  (res) => res,
  async (err) => {
    if (err.response?.data?.error.code === "4111") {
      localStorage.removeItem("token");
      const token = await reissueToken(uploadInstance);
      if (token) {
        err.config.headers["Authorization"] = token;
      }
      return axios.request(err.config);
    }
    return Promise.reject(err);
  }
);
