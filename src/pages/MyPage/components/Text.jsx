import React from "react";
import styled from "styled-components";

const SmallText = styled.span`
  height: 16px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
`;

const Text = ({ children }) => {
  return <SmallText>{children}</SmallText>;
};

export default Text;
