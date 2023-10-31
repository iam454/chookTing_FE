import React, { useState } from "react";
import styled from "styled-components";
import Text from "./Text";
import InfoModal from "./InfoModal";

const List = styled.ul`
  width: 100%;
  display: flex;
`;

const Item = styled.li`
  width: calc(100% / 3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

const Number = styled.span`
  font-weight: 600;
  font-size: 20px;
`;

const MyInfos = ({ isLinked, infos }) => {
  const { totalLikes, totalViews, fireworks } = infos;
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <List>
      <Item>
        <Number>{isLinked ? totalLikes || "-" : "-"}</Number>
        <Text>내가 받은 좋아요</Text>
      </Item>
      <Item>
        <Number>{isLinked ? totalViews || "-" : "-"}</Number>
        <Text>내가 받은 폭죽</Text>
      </Item>
      <Item onClick={() => setIsModalOpen(true)}>
        <Number>{isLinked ? fireworks || "-" : "-"}</Number>
        <Text>
          내 폭죽
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="9" stroke="currentColor" />
            <path
              d="M12.5 7.5C12.5 7.77614 12.2761 8 12 8C11.7239 8 11.5 7.77614 11.5 7.5C11.5 7.22386 11.7239 7 12 7C12.2761 7 12.5 7.22386 12.5 7.5Z"
              fill="currentColor"
            />
            <path d="M12 17V10" stroke="currentColor" />
          </svg>
        </Text>
      </Item>
      <InfoModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
      />
    </List>
  );
};

export default MyInfos;
