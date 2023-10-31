import React from "react";
import styled from "styled-components";

const Layout = styled.li`
  width: 350px;
  height: 56px;
  border-bottom: 1px solid ${(props) => props.theme.modal.gray};
  padding: 24px 0 16px;
  cursor: pointer;
`;

const Text = styled.div`
  font-size: 16px;
  line-height: 1;
  height: 16px;
`;

const ListItem = ({ onClick, children }) => {
  return (
    <Layout onClick={onClick}>
      <Text>{children}</Text>
    </Layout>
  );
};

export default ListItem;
