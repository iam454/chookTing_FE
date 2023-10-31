import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { ReactComponent as Home } from "../assets/Home.svg";
import { ReactComponent as Search } from "../assets/Search.svg";
import { ReactComponent as Profile } from "../assets/User_alt.svg";
import { useRecoilState } from "recoil";
import uploadFileState from "../recoil/uploadImage/atom";
import { Modal } from "./Modal";
import ModalButton from "./ModalButton";
import theme from "../theme";
import { KAKAO_AUTH_URL } from "../auth/kakao/auth";

const Nav = styled.nav`
  z-index: 10;
  border-top: 1px solid ${(props) => props.theme.modal.black};
  background-color: ${(props) => props.theme.black};
`;

const Tabs = styled.ul`
  display: flex;
`;

const Tab = styled.li`
  width: 130px;
  height: 56px;
  font-size: 11px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #9897a1;

  & .active {
    color: ${(props) => props.theme.white};
  }
`;

const Text = styled.span`
  display: block;
  height: 12px;
  text-align: center;
`;

const NavigationBar = () => {
  const isLoggedIn = !!localStorage.getItem("token");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [uploadFile, setUploadFile] = useRecoilState(uploadFileState);
  const navigate = useNavigate();

  const handlePopButtonClick = (e) => {
    if (!isLoggedIn) {
      e.preventDefault();
      setIsModalOpen(true);
    }
  };

  const handleMyButtonClick = (e) => {
    if (!isLoggedIn) {
      e.preventDefault();
      setIsModalOpen(true);
    }
    if (uploadFile.name) {
      setUploadFile({});
    }
  };

  const handleKakaoButtonClick = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <Nav>
      <Tabs>
        <Tab>
          <NavLink to="/">
            <Home width={24} height={24} />
            <Text>홈</Text>
          </NavLink>
        </Tab>
        <Tab>
          <NavLink to="/pop" onClick={handlePopButtonClick}>
            <Search width={24} height={24} />
            <Text>인기</Text>
          </NavLink>
        </Tab>
        <Tab>
          <NavLink to="/profile" onClick={handleMyButtonClick}>
            <Profile width={24} height={24} />
            <Text>MY</Text>
          </NavLink>
        </Tab>
      </Tabs>
      <Modal.Short
        isOpen={isModalOpen}
        text="로그인이 필요한 서비스입니다."
        onRequestClose={() => setIsModalOpen(false)}
      >
        <ModalButton
          isLong
          isTextBlack
          iconSrc="/icons/kakao.png"
          onClick={handleKakaoButtonClick}
          text="카카오로 3초만에 시작하기"
          bgColor={theme.yellow}
        />
      </Modal.Short>
    </Nav>
  );
};

export default NavigationBar;
