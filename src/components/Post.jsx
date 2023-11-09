import React, { useState } from "react";
import { styled } from "styled-components";
import IconButton from "./IconButton";
import { motion, useAnimation } from "framer-motion";
import { Modal } from "./Modal";
import ModalButton from "./ModalButton";
import theme from "../theme";
import { useMutation } from "@tanstack/react-query";
import {
  fetchHomeInstagramId,
  fetchPopInstagramId,
  updateLike,
} from "../apis/api/post";
import { handleKaKaoLogin } from "../utils/handleKaKaoLogin";
import { convertToK } from "../utils/convertToK";
import { useNavigate } from "react-router-dom";

const Layout = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  background-color: black;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const InfoContainer = styled.div`
  position: absolute;
  left: 16px;
  bottom: 16px;
  display: flex;
  flex-direction: column;
  z-index: 9;
`;

const ButtonContainer = styled.div`
  position: absolute;
  right: 16px;
  bottom: 16px;
  width: 48px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  z-index: 9;
`;

const heartStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

const BasePost = ({ image, info, children }) => {
  return (
    <Layout>
      {image && <Image src={image} alt="네컷 사진" />}
      <InfoContainer>{info}</InfoContainer>
      {children && <ButtonContainer>{children}</ButtonContainer>}
    </Layout>
  );
};

const HomePost = ({ id, image, info, isLikedPost, handleAutoPlayPause }) => {
  const isLoggedIn = !!localStorage.getItem("token");
  const [toggleLikeOn, setToggleLikeOn] = useState(isLikedPost);
  const [isPointModalOpen, setIsPointModalOpen] = useState(false);
  const [isPointErrorModalOpen, setIsPointErrorModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const navigate = useNavigate();
  const likeAnimation = useAnimation();
  const dbclickAnimation = useAnimation();
  const { mutate: postLike } = useMutation(updateLike);
  const { mutate: getInsta } = useMutation(fetchHomeInstagramId, {
    onSuccess: (res) => {
      const instagramId = res.data.response.instaId;
      window.location.href = `https://www.instagram.com/${instagramId}`;
    },
    onError: (err) => {
      if (err.response?.data?.error.code === "446") {
        setIsPointModalOpen(false);
        setIsPointErrorModalOpen(true);
      }
    },
  });

  const handleDoubleClick = () => {
    if (isLoggedIn) {
      if (!toggleLikeOn) {
        likeAnimation.start({
          fill: "rgba(254, 32, 32, 1)",
          stroke: "rgba(254, 32, 32, 1)",
          scale: [1, 1.2, 1],
        });
        postLike({ postId: id, like: true });
      }
      dbclickAnimation.start({
        fill: "rgba(254, 32, 32, 1)",
        stroke: "rgba(254, 32, 32, 1)",
        scale: [1, 1.2, 1],
        opacity: [1, 1, 0],
      });
      setToggleLikeOn(true);
    } else {
      handleAutoPlayPause();
      setIsLoginModalOpen(true);
    }
  };

  const handleLikeButtonClick = () => {
    if (isLoggedIn) {
      if (toggleLikeOn) {
        likeAnimation.start({
          fill: "rgba(254, 32, 32, 0)",
          stroke: "rgba(245, 245, 245, 1)",
        });
        postLike({ postId: id, like: false });
      } else {
        likeAnimation.start({
          fill: "rgba(254, 32, 32, 1)",
          stroke: "rgba(254, 32, 32, 1)",
          scale: [1, 1.2, 1],
        });
        dbclickAnimation.start({
          fill: "rgba(254, 32, 32, 1)",
          stroke: "rgba(254, 32, 32, 1)",
          scale: [1, 1.2, 1],
          opacity: [1, 1, 0],
        });
        postLike({ postId: id, like: true });
      }
      setToggleLikeOn((prev) => !prev);
    } else {
      handleAutoPlayPause();
      setIsLoginModalOpen(true);
    }
  };

  const handleInstaButtonClick = () => {
    if (isLoggedIn) {
      handleAutoPlayPause();
      setIsPointModalOpen(true);
    } else {
      handleAutoPlayPause();
      setIsLoginModalOpen(true);
    }
  };

  const handlePointButtonClick = () => {
    getInsta({ postId: id });
  };

  return (
    <Layout onDoubleClick={handleDoubleClick}>
      <Image src={image} alt="네컷 사진" />
      <InfoContainer>{info}</InfoContainer>
      <motion.svg
        width={48}
        height={48}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        style={heartStyle}
      >
        <motion.path
          d="M4.45067 13.9082L11.4033 20.4395C11.6428 20.6644 11.7625 20.7769 11.9037 20.8046C11.9673 20.8171 12.0327 20.8171 12.0963 20.8046C12.2375 20.7769 12.3572 20.6644 12.5967 20.4395L19.5493 13.9082C21.5055 12.0706 21.743 9.0466 20.0978 6.92607L19.7885 6.52734C17.8203 3.99058 13.8696 4.41601 12.4867 7.31365C12.2913 7.72296 11.7087 7.72296 11.5133 7.31365C10.1304 4.41601 6.17972 3.99058 4.21154 6.52735L3.90219 6.92607C2.25695 9.0466 2.4945 12.0706 4.45067 13.9082Z"
          animate={dbclickAnimation}
          strokeWidth="2"
        />
      </motion.svg>
      <ButtonContainer>
        <IconButton
          onClick={handleLikeButtonClick}
          name="like"
          title="Update like"
        >
          <motion.svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <motion.path
              d="M4.45067 13.9082L11.4033 20.4395C11.6428 20.6644 11.7625 20.7769 11.9037 20.8046C11.9673 20.8171 12.0327 20.8171 12.0963 20.8046C12.2375 20.7769 12.3572 20.6644 12.5967 20.4395L19.5493 13.9082C21.5055 12.0706 21.743 9.0466 20.0978 6.92607L19.7885 6.52734C17.8203 3.99058 13.8696 4.41601 12.4867 7.31365C12.2913 7.72296 11.7087 7.72296 11.5133 7.31365C10.1304 4.41601 6.17972 3.99058 4.21154 6.52735L3.90219 6.92607C2.25695 9.0466 2.4945 12.0706 4.45067 13.9082Z"
              initial={{
                stroke: toggleLikeOn
                  ? "rgba(254, 32, 32, 1)"
                  : "rgba(245, 245, 245, 1)",
                fill: toggleLikeOn
                  ? "rgba(254, 32, 32, 1)"
                  : "rgba(245, 245, 245, 0)",
              }}
              animate={likeAnimation}
              strokeWidth="2"
            />
          </motion.svg>
        </IconButton>
        <IconButton
          onClick={handleInstaButtonClick}
          name="instagram"
          title="Visit instagram"
        >
          <img
            src="/icons/instagram.png"
            width={20}
            height={20}
            alt="인스타그램"
          />
        </IconButton>
        <Modal.Long
          isOpen={isPointModalOpen}
          onRequestClose={() => setIsPointModalOpen(false)}
          text1="100 폭죽을 사용하여"
          text2="인스타그램 계정에 방문할 수 있어요!"
        >
          <ModalButton
            isLong
            onClick={handlePointButtonClick}
            iconSrc="/icons/fireworks.png"
            bgColor={theme.orange}
            text="네, 사용할래요!"
          />
        </Modal.Long>
        <Modal.Short
          isOpen={isPointErrorModalOpen}
          text="보유 폭죽이 부족해요."
          onRequestClose={() => setIsPointErrorModalOpen(false)}
        >
          <ModalButton
            onClick={() => navigate("/profile")}
            text="내 폭죽 보러가기"
            bgColor={theme.modal.gray}
          />
          <ModalButton
            onClick={() => setIsPointErrorModalOpen(false)}
            text="확인"
            bgColor={theme.orange}
          />
        </Modal.Short>
        <Modal.Short
          isOpen={isLoginModalOpen}
          text="로그인이 필요한 서비스입니다."
          onRequestClose={() => setIsLoginModalOpen(false)}
        >
          <ModalButton
            isLong
            isTextBlack
            iconSrc="/icons/kakao.png"
            onClick={handleKaKaoLogin}
            text="카카오로 3초만에 시작하기"
            bgColor={theme.yellow}
          />
        </Modal.Short>
      </ButtonContainer>
    </Layout>
  );
};

const PopPost = ({
  id,
  image,
  info,
  isLikedPost,
  numberLikes = 0,
  points,
  level,
}) => {
  const [isPointModalOpen, setIsPointModalOpen] = useState(false);
  const [isPointErrorModalOpen, setIsPointErrorModalOpen] = useState(false);
  const navigate = useNavigate();
  const [toggleLikeOn, setToggleLikeOn] = useState(isLikedPost);
  const [likes, setLikes] = useState(numberLikes);
  const likeAnimation = useAnimation();
  const dbclickAnimation = useAnimation();
  const { mutate: postLike } = useMutation(updateLike);
  const { mutate: getInsta } = useMutation(fetchPopInstagramId, {
    onSuccess: (res) => {
      const instagramId = res.data.response.instaId;
      window.location.href = `https://www.instagram.com/${instagramId}`;
    },
    onError: (err) => {
      if (err.response?.data?.error.code === "446") {
        setIsPointModalOpen(false);
        setIsPointErrorModalOpen(true);
      }
    },
  });

  const handleDoubleClick = () => {
    if (!toggleLikeOn) {
      likeAnimation.start({
        fill: "rgba(254, 32, 32, 1)",
        stroke: "rgba(254, 32, 32, 1)",
        scale: [1, 1.2, 1],
      });
      setLikes((prev) => prev + 1);
      postLike({ postId: id, like: true });
    }
    dbclickAnimation.start({
      fill: "rgba(254, 32, 32, 1)",
      stroke: "rgba(254, 32, 32, 1)",
      scale: [1, 1.2, 1],
      opacity: [1, 1, 0],
    });
    setToggleLikeOn(true);
  };

  const handleLikeButtonClick = () => {
    if (toggleLikeOn) {
      likeAnimation.start({
        fill: "rgba(254, 32, 32, 0)",
        stroke: "rgba(245, 245, 245, 1)",
      });
      setLikes((prev) => prev - 1);
      postLike({ postId: id, like: false });
    } else {
      likeAnimation.start({
        fill: "rgba(254, 32, 32, 1)",
        stroke: "rgba(254, 32, 32, 1)",
        scale: [1, 1.2, 1],
      });
      dbclickAnimation.start({
        fill: "rgba(254, 32, 32, 1)",
        stroke: "rgba(254, 32, 32, 1)",
        scale: [1, 1.2, 1],
        opacity: [1, 1, 0],
      });
      setLikes((prev) => prev + 1);
      postLike({ postId: id, like: true });
    }
    setToggleLikeOn((prev) => !prev);
  };

  const handlePointButtonClick = () => {
    getInsta({ postId: id, postLevel: level });
  };

  return (
    <Layout onDoubleClick={handleDoubleClick}>
      <Image src={image} alt="네컷 사진" />
      <InfoContainer>{info}</InfoContainer>
      <motion.svg
        width={48}
        height={48}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        style={heartStyle}
      >
        <motion.path
          d="M4.45067 13.9082L11.4033 20.4395C11.6428 20.6644 11.7625 20.7769 11.9037 20.8046C11.9673 20.8171 12.0327 20.8171 12.0963 20.8046C12.2375 20.7769 12.3572 20.6644 12.5967 20.4395L19.5493 13.9082C21.5055 12.0706 21.743 9.0466 20.0978 6.92607L19.7885 6.52734C17.8203 3.99058 13.8696 4.41601 12.4867 7.31365C12.2913 7.72296 11.7087 7.72296 11.5133 7.31365C10.1304 4.41601 6.17972 3.99058 4.21154 6.52735L3.90219 6.92607C2.25695 9.0466 2.4945 12.0706 4.45067 13.9082Z"
          animate={dbclickAnimation}
          strokeWidth="2"
        />
      </motion.svg>
      <ButtonContainer>
        <IconButton
          onClick={handleLikeButtonClick}
          text={convertToK(likes)}
          name="like"
          title="Update like"
        >
          <motion.svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <motion.path
              d="M4.45067 13.9082L11.4033 20.4395C11.6428 20.6644 11.7625 20.7769 11.9037 20.8046C11.9673 20.8171 12.0327 20.8171 12.0963 20.8046C12.2375 20.7769 12.3572 20.6644 12.5967 20.4395L19.5493 13.9082C21.5055 12.0706 21.743 9.0466 20.0978 6.92607L19.7885 6.52734C17.8203 3.99058 13.8696 4.41601 12.4867 7.31365C12.2913 7.72296 11.7087 7.72296 11.5133 7.31365C10.1304 4.41601 6.17972 3.99058 4.21154 6.52735L3.90219 6.92607C2.25695 9.0466 2.4945 12.0706 4.45067 13.9082Z"
              initial={{
                stroke: toggleLikeOn
                  ? "rgba(254, 32, 32, 1)"
                  : "rgba(245, 245, 245, 1)",
                fill: toggleLikeOn
                  ? "rgba(254, 32, 32, 1)"
                  : "rgba(245, 245, 245, 0)",
              }}
              animate={likeAnimation}
              strokeWidth="2"
            />
          </motion.svg>
        </IconButton>
        <IconButton
          onClick={() => {
            setIsPointModalOpen(true);
          }}
          name="instagram"
          title="Visit instagram"
        >
          <img
            src="/icons/instagram.png"
            width={20}
            height={20}
            alt="인스타그램"
          />
        </IconButton>
        <Modal.Long
          isOpen={isPointModalOpen}
          onRequestClose={() => setIsPointModalOpen(false)}
          text1={`${points} 폭죽을 사용하여`}
          text2="인스타그램 계정에 방문할 수 있어요!"
        >
          <ModalButton
            isLong
            onClick={handlePointButtonClick}
            iconSrc="/icons/fireworks.png"
            bgColor={theme.orange}
            text="네, 사용할래요!"
          />
        </Modal.Long>
        <Modal.Short
          isOpen={isPointErrorModalOpen}
          text="보유 폭죽이 부족해요."
          onRequestClose={() => setIsPointErrorModalOpen(false)}
        >
          <ModalButton
            onClick={() => navigate("/profile")}
            text="내 폭죽 보러가기"
            bgColor={theme.modal.gray}
          />
          <ModalButton
            onClick={() => setIsPointErrorModalOpen(false)}
            text="확인"
            bgColor={theme.orange}
          />
        </Modal.Short>
      </ButtonContainer>
    </Layout>
  );
};

const MyPost = ({
  id,
  image,
  info,
  isLikedPost,
  numberLikes,
  numberInstas,
}) => {
  const [toggleLikeOn, setToggleLikeOn] = useState(isLikedPost);
  const [likes, setLikes] = useState(numberLikes);
  const likeAnimation = useAnimation();
  const dbclickAnimation = useAnimation();
  const { mutate } = useMutation(updateLike);

  const handleDoubleClick = () => {
    if (!toggleLikeOn) {
      likeAnimation.start({
        fill: "rgba(254, 32, 32, 1)",
        stroke: "rgba(254, 32, 32, 1)",
        scale: [1, 1.2, 1],
      });
      setLikes((prev) => prev + 1);
      mutate({ postId: id, like: true });
    }
    dbclickAnimation.start({
      fill: "rgba(254, 32, 32, 1)",
      stroke: "rgba(254, 32, 32, 1)",
      scale: [1, 1.2, 1],
      opacity: [1, 1, 0],
    });
    setToggleLikeOn(true);
  };

  const handleLikeButtonClick = () => {
    if (toggleLikeOn) {
      likeAnimation.start({
        fill: "rgba(254, 32, 32, 0)",
        stroke: "rgba(245, 245, 245, 1)",
      });
      setLikes((prev) => prev - 1);
      mutate({ postId: id, like: false });
    } else {
      likeAnimation.start({
        fill: "rgba(254, 32, 32, 1)",
        stroke: "rgba(254, 32, 32, 1)",
        scale: [1, 1.2, 1],
      });
      dbclickAnimation.start({
        fill: "rgba(254, 32, 32, 1)",
        stroke: "rgba(254, 32, 32, 1)",
        scale: [1, 1.2, 1],
        opacity: [1, 1, 0],
      });
      setLikes((prev) => prev + 1);
      mutate({ postId: id, like: true });
    }
    setToggleLikeOn((prev) => !prev);
  };

  return (
    <Layout onDoubleClick={handleDoubleClick}>
      <Image src={image} alt="네컷 사진" />
      <InfoContainer>{info}</InfoContainer>
      <motion.svg
        width={48}
        height={48}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        style={heartStyle}
      >
        <motion.path
          d="M4.45067 13.9082L11.4033 20.4395C11.6428 20.6644 11.7625 20.7769 11.9037 20.8046C11.9673 20.8171 12.0327 20.8171 12.0963 20.8046C12.2375 20.7769 12.3572 20.6644 12.5967 20.4395L19.5493 13.9082C21.5055 12.0706 21.743 9.0466 20.0978 6.92607L19.7885 6.52734C17.8203 3.99058 13.8696 4.41601 12.4867 7.31365C12.2913 7.72296 11.7087 7.72296 11.5133 7.31365C10.1304 4.41601 6.17972 3.99058 4.21154 6.52735L3.90219 6.92607C2.25695 9.0466 2.4945 12.0706 4.45067 13.9082Z"
          animate={dbclickAnimation}
          strokeWidth="2"
        />
      </motion.svg>
      <ButtonContainer>
        <IconButton
          onClick={handleLikeButtonClick}
          text={likes.toLocaleString()}
          name="like"
          title="Update like"
        >
          <motion.svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <motion.path
              d="M4.45067 13.9082L11.4033 20.4395C11.6428 20.6644 11.7625 20.7769 11.9037 20.8046C11.9673 20.8171 12.0327 20.8171 12.0963 20.8046C12.2375 20.7769 12.3572 20.6644 12.5967 20.4395L19.5493 13.9082C21.5055 12.0706 21.743 9.0466 20.0978 6.92607L19.7885 6.52734C17.8203 3.99058 13.8696 4.41601 12.4867 7.31365C12.2913 7.72296 11.7087 7.72296 11.5133 7.31365C10.1304 4.41601 6.17972 3.99058 4.21154 6.52735L3.90219 6.92607C2.25695 9.0466 2.4945 12.0706 4.45067 13.9082Z"
              initial={{
                stroke: toggleLikeOn
                  ? "rgba(254, 32, 32, 1)"
                  : "rgba(245, 245, 245, 1)",
                fill: toggleLikeOn
                  ? "rgba(254, 32, 32, 1)"
                  : "rgba(245, 245, 245, 0)",
              }}
              animate={likeAnimation}
              strokeWidth="2"
            />
          </motion.svg>
        </IconButton>
        <IconButton
          text={numberInstas.toLocaleString()}
          name="instagram"
          title="Visit instagram"
        >
          <img
            src="/icons/instagram.png"
            width={20}
            height={20}
            alt="인스타그램"
          />
        </IconButton>
        <IconButton
          onClick={() => {
            alert("미구현 기능입니다.");
          }}
          name="download"
          title="Download"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 14L11.2929 14.7071L12 15.4142L12.7071 14.7071L12 14ZM13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44771 11 5L13 5ZM6.29289 9.70711L11.2929 14.7071L12.7071 13.2929L7.70711 8.29289L6.29289 9.70711ZM12.7071 14.7071L17.7071 9.70711L16.2929 8.29289L11.2929 13.2929L12.7071 14.7071ZM13 14L13 5L11 5L11 14L13 14Z"
              fill="currentColor"
            />
            <path
              d="M5 16L5 17C5 18.1046 5.89543 19 7 19L17 19C18.1046 19 19 18.1046 19 17V16"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </IconButton>
      </ButtonContainer>
    </Layout>
  );
};

export const Post = Object.assign(BasePost, {
  Home: HomePost,
  Pop: PopPost,
  My: MyPost,
});

export default Post;
