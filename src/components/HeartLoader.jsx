import React from "react";
import styled from "styled-components";

const Heart = styled.div`
  width: 30px;
  height: 45px;
  animation: heartBeat 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);

  &:before,
  &:after {
    content: "";
    background: #ff3d00;
    width: 30px;
    height: 45px;
    border-radius: 50px 50px 0 0;
    position: absolute;
    left: 0;
    bottom: 0;
    transform: rotate(45deg);
    transform-origin: 50% 68%;
    box-shadow: 5px 4px 5px #0004 inset;
  }
  &:after {
    transform: rotate(-45deg);
  }
  @keyframes heartBeat {
    0% {
      transform: scale(0.95);
    }
    5% {
      transform: scale(1.1);
    }
    39% {
      transform: scale(0.85);
    }
    45% {
      transform: scale(1);
    }
    60% {
      transform: scale(0.95);
    }
    100% {
      transform: scale(0.9);
    }
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const AnimatedHeart = () => {
  return <Heart />;
};

export const CenteredHeart = () => {
  return (
    <Container>
      <Heart />
    </Container>
  );
};
