import React, { useEffect } from "react";
import Layout from "./Layout";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import HeartLoader from "./HeartLoader";
import { kakaoLogin } from "../apis/api/user";
import { useMutation } from "@tanstack/react-query";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const KakaoHandler = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const code = new URLSearchParams(location.search).get("code");
  const { mutate } = useMutation(kakaoLogin, {
    onSuccess: (res) => {
      const token = res.headers.authorization;
      localStorage.setItem("token", token);
      navigate("/");
    },
    onError: (e) => {
      console.log("카카오 로그인 실패", e);
      navigate("/");
    },
  });

  useEffect(() => {
    mutate({ code });
  }, []);

  return (
    <Layout>
      <Container>
        <HeartLoader />
      </Container>
    </Layout>
  );
};

export default KakaoHandler;
