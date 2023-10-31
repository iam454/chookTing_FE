import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Layout = styled(motion.div)`
  width: 358px;
  height: 220px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.album.white};
  color: ${(props) => props.theme.album.black};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 326px;
  height: 188px;
  display: flex;
  gap: 16px;
`;

const Image = styled.img`
  width: 130px;
  height: 188px;
  background-color: black;
  object-fit: contain;
`;

const Description = styled.div`
  width: 180px;
  position: relative;
  font-size: 16px;
`;

const Name = styled.span`
  display: block;
  font-weight: 600;
  margin-bottom: 8px;
`;

const Date = styled.span`
  display: block;
  font-size: 14px;
`;

const Infos = styled.ul`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  gap: 12px;
`;

const Info = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
`;

const BoldText = styled.span`
  font-weight: 500;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

const Card = ({ photo, layoutId, onClick }) => {
  const { imageUri, createdAt, nickname, likeCount, viewCount } = photo;
  return (
    <Layout layoutId={layoutId} onClick={onClick}>
      <Container>
        <Image src={`${process.env.REACT_APP_IMAGE_BASE_URL}${imageUri}`} />
        <Description>
          <Name>{nickname}</Name>
          <Date>{createdAt}</Date>
          <Infos>
            {likeCount !== 0 && (
              <Info>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.45067 13.9082L11.4033 20.4395C11.6428 20.6644 11.7625 20.7769 11.9037 20.8046C11.9673 20.8171 12.0327 20.8171 12.0963 20.8046C12.2375 20.7769 12.3572 20.6644 12.5967 20.4395L19.5493 13.9082C21.5055 12.0706 21.743 9.0466 20.0978 6.92607L19.7885 6.52734C17.8203 3.99058 13.8696 4.41601 12.4867 7.31365C12.2913 7.72296 11.7087 7.72296 11.5133 7.31365C10.1304 4.41601 6.17972 3.99058 4.21154 6.52735L3.90219 6.92607C2.25695 9.0466 2.4945 12.0706 4.45067 13.9082Z"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
                <BoldText>{likeCount}</BoldText>
              </Info>
            )}
            {viewCount !== 0 && (
              <Info>
                <Icon src="/icons/instagram.png" />
                <BoldText>{viewCount}</BoldText>
              </Info>
            )}
          </Infos>
        </Description>
      </Container>
    </Layout>
  );
};

export default Card;
