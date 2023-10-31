import React from "react";
import Post from "../../components/Post";
import PostInfos from "../../components/PostInfos";
import { useNavigate, useParams } from "react-router-dom";
import { fetchMyPost } from "../../apis/api/post";
import { useQuery } from "@tanstack/react-query";
import { SkeletonPage } from "../SkeletonPage/SkeletonPage";

const sample = {
  id: 4,
  image: "/sample.png",
  createdAt: "2023-09-02",
  name: "안녕하세요",
  hashtags: ["해쉬태그", "안녕"],
  likes: 50,
  instaViews: 39,
  isLiked: true,
};

const MyDetailPage = () => {
  const postId = useParams();
  const navigate = useNavigate();
  const {
    isLoading,
    data: myDetail,
    refetch,
  } = useQuery(["myDetail", postId], () => fetchMyPost(postId), {
    onError: (e) => {
      alert("게시물을 찾을 수 없습니다.");
      refetch();
      navigate("/profile");
    },
  });

  console.log("My Detail", postId, myDetail);

  if (isLoading) {
    return <SkeletonPage.My />;
  }

  return (
    <Post.My
      // id={}
      image={myDetail.data.response.imageUri}
      info={
        <PostInfos
          name={myDetail.data.response.nickname}
          hashtags={myDetail?.data.response.hashTags}
        />
      }
      isLikedPost={myDetail?.data.response.isLiked}
      numberLikes={myDetail?.data.response.likeCount}
      numberInstas={myDetail?.data.response.viewCount}
    />
  );
};

export default MyDetailPage;
