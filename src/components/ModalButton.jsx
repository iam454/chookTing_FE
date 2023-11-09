import React from "react";
import { styled } from "styled-components";

const Button = styled.button`
  cursor: pointer;
  width: ${(props) => (props.$isLong ? "310px" : "151px")};
  height: 44px;
  border: none;
  border-radius: 8px;
  outline: none;
  color: ${(props) =>
    props.$isTextBlack ? props.theme.black : props.theme.white};
  background-color: ${(props) => props.$bgColor};
`;

const Layout = styled.div`
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

const Icon = styled.img`
  width: 16px;
  height: 16px;
`;

const Text = styled.div`
  height: 19px;
  font-size: 14px;
  line-height: 1.4;
`;

const ModalButton = ({
  isLong = false,
  bgColor,
  isTextBlack = false,
  onClick,
  iconSrc,
  text,
}) => {
  return (
    <Button
      $isLong={isLong}
      $bgColor={bgColor}
      $isTextBlack={isTextBlack}
      onClick={onClick}
    >
      <Layout>
        {iconSrc && <Icon src={iconSrc} />}
        <Text>{text}</Text>
      </Layout>
    </Button>
  );
};

export default ModalButton;
