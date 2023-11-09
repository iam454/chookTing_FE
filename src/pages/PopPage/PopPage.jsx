import React, { useEffect, useRef } from "react";
import Layout from "../../components/Layout";
import Card from "./components/Card";
import { MasonryInfiniteGrid } from "@egjs/react-infinitegrid";
import { useMatch, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { styled } from "styled-components";
import PopDetailPage from "../PopDetailPage/PopDetailPage";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchPopPosts } from "../../apis/api/post";
import { CenteredHeart } from "../../components/HeartLoader";

const Container = styled.main`
  width: 358px;
  position: absolute;
  top: 16px;
  left: 50%;
  transform: translateX(-50%);
`;

const Overlay = styled(motion.div)`
  position: fixed;
  width: 390px;
  height: 100%;
  background-color: ${(props) => props.theme.modal.dim};
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

const PopPage = () => {
  const bottomObserverRef = useRef(null);
  const navigate = useNavigate();
  const detailMatch = useMatch("/pop/post/:postId");
  const {
    isLoading,
    data: pop,
    fetchNextPage,
    refetch,
  } = useInfiniteQuery(["pop"], fetchPopPosts, {
    getNextPageParam: (lastPage, allPages) => {
      return allPages.length;
    },
    onError: (e) => {
      alert("네트워크 연결이 불안정합니다.");
      refetch();
    },
  });

  useEffect(() => {
    const handleObserver = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          fetchNextPage();
        }
      });
    };

    const io = new IntersectionObserver(handleObserver, {
      threshold: 0.3,
    });

    if (bottomObserverRef.current) {
      io.observe(bottomObserverRef.current);
    }

    return () => {
      io.disconnect();
    };
  }, [bottomObserverRef, fetchNextPage, pop]);

  const handleCardClick = (postId) => {
    navigate(`post/${postId}`);
  };

  const handleOverlayClick = () => {
    navigate("/pop");
  };

  if (isLoading) {
    return (
      <Layout>
        <CenteredHeart />
      </Layout>
    );
  }

  return (
    <Layout>
      <Container>
        <MasonryInfiniteGrid gap={8} isConstantSize={true} column={2}>
          {pop.pages.map((page, pageIndex) =>
            page.data.response.popularPosts.map((post, postIndex) => {
              return (
                <Card
                  key={`${pageIndex}${postIndex}`}
                  level={post.postLevel}
                  image={post.imageUrl}
                  onClick={() => handleCardClick(post.postId)}
                />
              );
            })
          )}
        </MasonryInfiniteGrid>
        <div ref={bottomObserverRef}></div>
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
            <Detail
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.3 }}
            >
              <PopDetailPage />
            </Detail>
          </>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default PopPage;
