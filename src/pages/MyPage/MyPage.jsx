import React, { useEffect, useRef } from "react";
import Layout from "../../components/Layout";
import styled from "styled-components";
import UploadButton from "./components/UploadButton";
import KaKaoProfile from "./components/KaKaoProfile";
import InstaProfile from "./components/InstaProfile";
import Card from "./components/Card";
import { AnimatePresence, motion } from "framer-motion";
import { useMatch, useNavigate } from "react-router-dom";
import MyDetailPage from "../MyDetailpage/MyDetailPage";
import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import { fetchUserInfos } from "../../apis/api/user";
import { fetchMyPosts } from "../../apis/api/post";
import { CenteredHeart } from "../../components/HeartLoader";

const Container = styled.div`
  width: 358px;
  position: absolute;
  top: 16px;
  left: 50%;
  transform: translateX(-50%);
`;

const Album = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Overlay = styled(motion.div)`
  position: fixed;
  width: 390px;
  height: 100%;
  background-color: ${(props) => props.theme.modal.dim};
  opacity: 0;
`;

const Detail = styled(motion.div)`
  position: fixed;
  top: 0;
  bottom: 57px;
  left: 0;
  right: 0;
  margin: auto;
  width: 374px;
  height: 80vh;
  height: 80dvh;
  border-radius: 8px;
  background-color: rgb(15, 15, 15);
  overflow: hidden;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const MyPage = () => {
  const bottomObserverRef = useRef(null);
  const navigate = useNavigate();
  const detailMatch = useMatch("/profile/post/:postId");
  const {
    isLoading: isUserInfosLoading,
    data: userInfos,
    refetch: refetchUserInfos,
  } = useQuery(["userInfos"], fetchUserInfos, {
    onError: () => {
      alert("사용자 정보를 찾을 수 없습니다.");
      refetchUserInfos();
      navigate("/");
    },
    cacheTime: 0,
  });
  const {
    isLoading: isMyLoading,
    data: my,
    fetchNextPage,
    refetch: refetchMy,
  } = useInfiniteQuery(["my"], ({ pageParam = 0 }) => fetchMyPosts(pageParam), {
    getNextPageParam: (lastPage, allPages) => {
      const {
        data: {
          response: { hasNext, lastPostId },
        },
      } = lastPage;
      return hasNext ? lastPostId : undefined;
    },
    onError: () => {
      alert("게시물을 찾을 수 없습니다.");
      refetchMy();
    },
    cacheTime: 0,
  });

  const handleCardClick = (postId) => {
    navigate(`post/${postId}`);
  };

  const handleOverlayClick = () => {
    refetchMy();
    refetchUserInfos();
    navigate("/profile");
  };

  useEffect(() => {
    const handleObserver = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          fetchNextPage();
        }
      });
    };

    const io = new IntersectionObserver(handleObserver, {
      threshold: 0.8,
    });

    if (bottomObserverRef.current) {
      io.observe(bottomObserverRef.current);
    }

    return () => {
      io.disconnect();
    };
  }, [bottomObserverRef, fetchNextPage, my]);

  if (isUserInfosLoading || isMyLoading) {
    return (
      <Layout>
        <CenteredHeart />
      </Layout>
    );
  }

  return (
    <Layout>
      <Container>
        <KaKaoProfile
          username={userInfos.data.response.username}
          profileImage={userInfos.data.response.profileImage}
        />
        <InstaProfile
          isLinked={userInfos.data.response.instagram.isLinked}
          fireworks={userInfos.data.response.fireworks}
          infos={userInfos.data.response.instagram.infos}
        />
        <UploadButton isLinked={userInfos.data.response.instagram.isLinked} />
        <Album>
          {my.pages.map((page) =>
            page.data.response.postList.map((post) => {
              return (
                <Card
                  layoutId={"my" + post.postId}
                  key={post.postId}
                  photo={post}
                  onClick={() => handleCardClick(post.postId)}
                />
              );
            })
          )}
          <div ref={bottomObserverRef}></div>
        </Album>
      </Container>
      <AnimatePresence>
        {detailMatch && (
          <>
            <Overlay
              onClick={handleOverlayClick}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <Detail layoutId={"my" + detailMatch.params.postId}>
              <MyDetailPage />
            </Detail>
          </>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default MyPage;
