import React from "react";
import Layout from "../../components/Layout";
import styled from "styled-components";
import ModalButton from "../../components/ModalButton";
import theme from "../../theme";
import { useNavigate } from "react-router-dom";

const Container = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;
`;

const TextBox = styled.p`
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: center;
  align-items: center;
`;

const LargeText = styled.span`
  font-size: 22px;
  font-weight: 600;
`;

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleHomeButtonClick = () => {
    navigate("/");
  };

  return (
    <Layout>
      <Container>
        <TextBox>
          <LargeText>죄송합니다.</LargeText>
          <LargeText>페이지를 찾을 수 없습니다.</LargeText>
        </TextBox>
        <ModalButton
          text="홈으로 가기"
          bgColor={theme.orange}
          onClick={handleHomeButtonClick}
        />
      </Container>
    </Layout>
  );
};

export default NotFoundPage;
