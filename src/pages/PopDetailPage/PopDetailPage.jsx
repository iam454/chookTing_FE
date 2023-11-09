import React from "react";
import Post from "../../components/Post";
import PostInfos from "../../components/PostInfos";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { fetchPopPost } from "../../apis/api/post";
import { SkeletonPage } from "../SkeletonPage/SkeletonPage";

const PopDetailPage = () => {
  const navigate = useNavigate();
  const postId = useParams();
  const {
    isLoading,
    data: popDetail,
    refetch,
  } = useQuery(["popDetail", postId], () => fetchPopPost(postId), {
    onError: (e) => {
      alert("게시물을 찾을 수 없습니다.");
      refetch();
      navigate("/pop");
    },
    cacheTime: 0,
  });

  if (isLoading) {
    return <SkeletonPage.Pop />;
  }

  return (
    <Post.Pop
      image={popDetail.data.response.imageUrl}
      info={
        <PostInfos
          name={popDetail.data.response.nickname}
          hashtags={popDetail.data.response.hashTags}
        />
      }
      id={popDetail.data.response.postId}
      isLikedPost={popDetail.data.response.isLiked}
      numberLikes={popDetail.data.response.likeCount}
      points={popDetail.data.response.postPoint}
      level={popDetail.data.response.postLevel}
    />
  );
};

export default PopDetailPage;
