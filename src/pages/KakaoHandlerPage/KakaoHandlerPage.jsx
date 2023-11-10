import React, { useEffect } from "react";
import Layout from "../../components/Layout";
import { useLocation, useNavigate } from "react-router-dom";
import { CenteredHeart } from "../../components/HeartLoader";
import { kakaoLogin } from "../../apis/api/user";
import { useMutation } from "@tanstack/react-query";

const KakaoHandlerPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const code = new URLSearchParams(location.search).get("code");
  const { mutate } = useMutation(kakaoLogin, {
    onSuccess: (res) => {
      const token = res.headers.authorization;
      localStorage.setItem("token", token);
      navigate("/");
      window.location.reload();
    },
    onError: () => {
      alert("로그인에 실패했습니다. 다시 시도해주세요.");
      navigate("/");
    },
  });

  useEffect(() => {
    mutate({ code });
  }, []);

  return (
    <Layout>
      <CenteredHeart />
    </Layout>
  );
};

export default KakaoHandlerPage;
