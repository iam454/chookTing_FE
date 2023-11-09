import React from "react";
import { styled } from "styled-components";

const StyledButton = styled.button`
  cursor: pointer;
  width: ${(props) => props.$width};
  height: 44px;
  border: none;
  border-radius: 8px;
  outline: none;
  font-size: ${(props) => (props.$isReversed ? "11px" : "14px")};
  color: ${(props) => (props.$isReversed ? "#bebebe" : props.theme.black)};
  background-color: ${(props) =>
    props.$isReversed ? "transparent" : props.theme.white};
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

const Text = styled.span`
  height: 19px;
  line-height: 1.4;
`;

const Button = ({
  onClick,
  width = "100%",
  isReversed = false,
  iconSrc,
  text,
}) => {
  return (
    <StyledButton onClick={onClick} $width={width} $isReversed={isReversed}>
      <Layout>
        {iconSrc && <Icon src={iconSrc} />}
        <Text>{text}</Text>
      </Layout>
    </StyledButton>
  );
};

export default Button;
