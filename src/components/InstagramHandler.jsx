import React from "react";
import Layout from "./Layout";
import styled from "styled-components";
import HeartLoader from "./HeartLoader";
import { useLocation, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { instagramConnect } from "../apis/api/user";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const InstagramHandler = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const code = new URLSearchParams(location.search).get("code");
  const { mutate } = useMutation(instagramConnect, {
    onSuccess: (res) => {
      const token = res.headers.authorization;
      localStorage.setItem("token", token);
      console.log("인스타 토큰 발급 성공");
      navigate("/profile");
    },
    onError: (e) => {
      console.log("인스타 연결 실패", e);
      navigate("/profile");
    },
  });

  return (
    <Layout>
      <Container>
        <HeartLoader />
      </Container>
    </Layout>
  );
};

export default InstagramHandler;
