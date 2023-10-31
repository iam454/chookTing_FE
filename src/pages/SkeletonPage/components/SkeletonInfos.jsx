import React from "react";
import { styled } from "styled-components";

const SkeletonName = styled.div`
  width: 96px;
  height: 32px;
  margin-bottom: 4px;
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

const SkeletonDescription = styled.div`
  width: 144px;
  height: 24px;
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

const SkeletonInfos = () => {
  return (
    <>
      <SkeletonName />
      <SkeletonDescription />
    </>
  );
};

export default SkeletonInfos;
