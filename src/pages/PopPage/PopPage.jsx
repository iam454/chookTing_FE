import React, { useEffect, useRef, useState } from "react";
import Layout from "../../components/Layout";
import Container from "./components/Container";
import Card from "./components/Card";
import { MasonryInfiniteGrid } from "@egjs/react-infinitegrid";
import { useMatch, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { styled } from "styled-components";
import { SkeletonPage } from "../SkeletonPage/SkeletonPage";
import PopDetailPage from "../PopDetailPage/PopDetailPage";
import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import { fetchPopPosts } from "../../apis/api/post";

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

const PopPage = () => {
  const navigate = useNavigate();
  const detailMatch = useMatch("/pop/post/:postId");
  const { data: pop, fetchNextPage } = useInfiniteQuery(
    ["pop"],
    fetchPopPosts,
    {
      getNextPageParam: (lastPage, allPages) => {
        return allPages.length;
      },
    }
  );
  const bottomObserverRef = useRef(null);

  const handleCardClick = (postId) => {
    navigate(`post/${postId}`);
  };

  const handleOverlayClick = () => {
    navigate("/pop");
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
      threshold: 0.3,
    });

    if (bottomObserverRef.current) {
      io.observe(bottomObserverRef.current);
    }

    return () => {
      io.disconnect();
    };
  }, [bottomObserverRef, fetchNextPage]);

  return (
    <Layout>
      <Container>
        <MasonryInfiniteGrid gap={8} isConstantSize={true} column={2}>
          {pop?.pages.map((page) =>
            page.data.response.popularPosts.map((post) => {
              return (
                <Card
                  layoutId={"pop" + post.postId}
                  key={post.postId}
                  level={post.postLevel}
                  image={post.imageUri}
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
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <Detail layoutId={"pop" + detailMatch.params.postId}>
              <PopDetailPage />
            </Detail>
          </>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default PopPage;
