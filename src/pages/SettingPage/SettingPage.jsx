import React from "react";
import Layout from "../../components/Layout";
import ListItem from "./components/ListItem";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { deleteUser, kakaoLogout } from "../../apis/api/user";

const Header = styled.header`
  width: 100%;
  height: 56px;
  padding: 16px;
  background-color: ${(props) => props.theme.modal.black};
  border-bottom: 1px solid ${(props) => props.theme.modal.gray};
  position: relative;
  display: flex;
  align-items: center;
`;

const Prev = styled(Link)`
  width: 24px;
  height: 24px;
`;

const Title = styled.h1`
  font-size: 18px;
  line-height: 1.3;
  height: 24px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Main = styled.main`
  width: 100%;
  padding: 0 20px;
`;

const List = styled.ul`
  width: 100%;
`;

const Quit = styled.div`
  font-size: 12px;
  margin-top: 12px;
  color: ${(props) => props.theme.modal.lightGray};
  text-decoration: underline;
  cursor: pointer;
`;

const SettingPage = () => {
  const navigate = useNavigate();
  const { mutate: logout } = useMutation(kakaoLogout, {
    onSuccess: () => {
      localStorage.removeItem("token");
      navigate("/");
    },
    onError: (e) => {
      console.log("로그아웃 실패", e);
    },
  });
  const { mutate: quit } = useMutation(deleteUser, {
    onSuccess: () => {
      localStorage.removeItem("token");
      navigate("/");
    },
    onError: (e) => {
      console.log("탈퇴 실패", e);
    },
  });

  const handleAskClick = () => {
    alert("미구현 기능입니다.");
    console.log("카카오 문의하기 채널로 이동");
  };

  const handleLogOutClick = () => {
    logout();
  };

  const handleQuitClick = () => {
    quit();
  };

  return (
    <Layout>
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        <Header>
          <Prev to="/profile">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 6L9 12L15 18"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </Prev>
          <Title>설정</Title>
        </Header>
        <Main>
          <List>
            <ListItem onClick={handleAskClick}>카카오 문의하기</ListItem>
            <ListItem onClick={handleLogOutClick}>로그아웃</ListItem>
          </List>
          <Quit onClick={handleQuitClick}>회원 탈퇴</Quit>
        </Main>
      </motion.div>
    </Layout>
  );
};

export default SettingPage;
