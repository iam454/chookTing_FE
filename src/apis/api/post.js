import { instance, uploadInstance } from "..";

export const createPost = (payload) => {
  return uploadInstance.post("/post", payload);
};

export const fetchHomePosts = (lastPostId) => {
  return instance.get(`/post?lastPostId=${lastPostId}`);
};

export const fetchPopPosts = () => {
  return instance.get("/popular-post?level3=4&level2=3&level1=3");
};

export const fetchPopPost = ({ postId }) => {
  return instance.get(`/popular-post/${postId}`);
};

export const fetchMyPosts = (lastPostId) => {
  return instance.get(`/post/user?lastPostId=${lastPostId}`);
};

export const fetchMyPost = ({ postId }) => {
  return instance.get(`/post/${postId}/user`);
};

export const updateLike = (payload) => {
  const { postId } = payload;
  return instance.post(`/post/${postId}/like`, payload);
};

export const fetchPopInstagramId = (payload) => {
  return instance.post("/point/popular-post", payload);
};

export const fetchHomeInstagramId = (payload) => {
  return instance.post("/point/post", payload);
};
