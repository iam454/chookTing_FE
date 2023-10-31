import React from "react";
import styled from "styled-components";
import SettingButton from "./SettingButton";
import { useNavigate } from "react-router-dom";

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px 0;
`;

const Image = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.white};
  margin-bottom: 8px;
  object-fit: cover;
`;

const Name = styled.span`
  font-weight: 500;
  height: 20px;
  font-size: 16px;
`;

const KaKaoProfile = ({ username, email, profileImage }) => {
  const navigate = useNavigate();

  const handleSettingButtonClick = () => {
    navigate("setting");
  };

  return (
    <Profile>
      <SettingButton onClick={handleSettingButtonClick} />
      <Image src={profileImage} />
      <Name>{username}</Name>
    </Profile>
  );
};

export default KaKaoProfile;
