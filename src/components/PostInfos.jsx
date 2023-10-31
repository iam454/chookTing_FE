import React from "react";
import { styled } from "styled-components";

const Name = styled.span`
  height: 32px;
  font-size: 22px;
  line-height: 1.4;
  text-shadow: 2px 2px 10px black;
`;

const Description = styled.ul`
  height: 24px;
  font-size: 16px;
  display: flex;
  gap: 8px;
`;

const Hashtag = styled.li`
  height: 100%;
  text-shadow: 2px 2px 10px black;
  display: flex;
  align-items: center;
  gap: 2px;
`;

const PostInfos = ({ name, hashtags, onClick }) => {
  return (
    <>
      <Name>{name}</Name>
      {hashtags.length !== 0 && (
        <Description>
          {hashtags.map((hashtag, index) => {
            return (
              <Hashtag onClick={onClick} key={hashtag + index}>
                #{hashtag}
                {onClick && (
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 6L6 18"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 6L18 18"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </Hashtag>
            );
          })}
        </Description>
      )}
    </>
  );
};

export default PostInfos;
