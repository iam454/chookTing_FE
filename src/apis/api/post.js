import { instance, uploadInstance } from "..";

export const createPost = (payload) => {
  return uploadInstance.post("/post", payload);
};

export const fetchHomePosts = () => {
  return instance.get("/post");
};

export const fetchPopPosts = () => {
  return instance.get("/popular-post?level3=4&level2=3&level1=3");
};

export const fetchPopPost = ({ postId }) => {
  return instance.get(`/popular-post/${postId}`);
};

export const updateLike = (payload) => {
  const { postId } = payload;
  return instance.post(`/post/${postId}/like`);
};

export const fetchMyPosts = () => {
  return instance.get("/post/user");
};

export const fetchMyPost = ({ postId }) => {
  return instance.get(`/post/${postId}/user`);
};
