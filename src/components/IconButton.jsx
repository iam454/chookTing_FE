import React from "react";
import { styled } from "styled-components";

const Layout = styled.label`
  width: 48px;
`;

const Button = styled.button`
  cursor: pointer;
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 50%;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.icon.white};
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
`;

const Text = styled.span`
  width: 48px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-shadow: 2px 2px 10px black;
`;

const IconButton = ({ onClick, children, text }) => {
  return (
    <Layout>
      <Button
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
      >
        {children}
      </Button>
      {text !== null && text !== undefined && <Text>{text}</Text>}
    </Layout>
  );
};

export default IconButton;
