import React, { useEffect } from "react";
import Layout from "../../components/Layout";
import { CenteredHeart } from "../../components/HeartLoader";
import { useLocation, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { instagramConnect } from "../../apis/api/user";

const InstagramHandlerPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const code = new URLSearchParams(location.search).get("code");
  const { mutate } = useMutation(instagramConnect, {
    onSuccess: (res) => {
      const token = res.headers.authorization;
      localStorage.setItem("token", token);
      navigate("/profile");
    },
    onError: () => {
      alert("인스타 연결에 실패했습니다. 다시 시도해주세요.");
      navigate("/profile");
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

export default InstagramHandlerPage;
