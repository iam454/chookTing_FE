import React, { useState } from "react";
import styled from "styled-components";
import MyInfos from "./MyInfos";
import Text from "./Text";
import { Modal } from "../../../components/Modal";
import theme from "../../../theme";
import ModalButton from "../../../components/ModalButton";
import { INSTAGRAM_AUTH_URL } from "../../../auth/instagram/auth";

const Profile = styled.div`
  padding: 8px 0;
  border-top: 1px solid ${(props) => props.theme.white};
  border-bottom: 1px solid ${(props) => props.theme.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  filter: ${(props) => (props.$isLinked ? "none" : "grayScale(100)")};
`;

const InstaButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  border: none;
  background-color: transparent;
  color: ${(props) => props.theme.white};
  padding: 0;
  font-family: "Pretendard Variable", Pretendard, -apple-system,
    BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI",
    "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
`;

const InstaProfile = ({ isLinked, infos }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    if (!isLinked) {
      setIsModalOpen(true);
    }
  };

  const handleInstagramConnection = () => {
    window.location.href = INSTAGRAM_AUTH_URL;
  };

  return (
    <Profile>
      <Text>포토카드에 SNS 계정을 연결해서 공유해 보세요.</Text>
      <InstaButton onClick={handleButtonClick}>
        <Icon src="/icons/instagram.png" $isLinked={isLinked} />
        <Text>{isLinked ? "연결 완료" : "연결하기"}</Text>
      </InstaButton>
      <MyInfos isLinked={isLinked} infos={infos} />
      <Modal.Long
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        text1="인스타그램 계정을 연결하여"
        text2="축팅의 모든 서비스를 이용해보세요!"
      >
        <ModalButton
          isLong
          onClick={handleInstagramConnection}
          iconSrc="/icons/instagram.png"
          bgColor={theme.pink}
          text="인스타그램 연결하기"
        />
      </Modal.Long>
    </Profile>
  );
};

export default InstaProfile;
