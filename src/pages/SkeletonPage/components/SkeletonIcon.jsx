import React from "react";
import { styled } from "styled-components";

const Layout = styled.div`
  width: 48px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: center;
`;

const SkeletonButton = styled.div`
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 50%;
  background-color: rgba(165, 165, 165, 0.2);
  animation: skeleton-gradient 2s infinite ease-in-out;
  @keyframes skeleton-gradient {
    0% {
      background-color: rgba(165, 165, 165, 0.2);
    }
    50% {
      background-color: rgba(165, 165, 165, 0.4);
    }
    100% {
      background-color: rgba(165, 165, 165, 0.2);
    }
  }
`;

const SkeletonText = styled.div`
  width: 48px;
  height: 18px;
  background-color: rgba(165, 165, 165, 0.2);
  animation: skeleton-gradient 2s infinite ease-in-out;
  @keyframes skeleton-gradient {
    0% {
      background-color: rgba(165, 165, 165, 0.2);
    }
    50% {
      background-color: rgba(165, 165, 165, 0.4);
    }
    100% {
      background-color: rgba(165, 165, 165, 0.2);
    }
  }
`;

const SkeletonIcon = ({ hasText = false }) => {
  return (
    <Layout>
      <SkeletonButton />
      {hasText && <SkeletonText />}
    </Layout>
  );
};

export default SkeletonIcon;
