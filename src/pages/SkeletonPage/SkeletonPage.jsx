import React from "react";
import Post from "../../components/Post";
import SkeletonInfos from "./components/SkeletonInfos";
import SkeletonIcon from "./components/SkeletonIcon";

const BaseSkeletonPage = ({ children }) => {
  return <Post info={<SkeletonInfos />}>{children}</Post>;
};

const HomeSkeletonPage = () => {
  return (
    <SkeletonPage>
      <SkeletonIcon />
      <SkeletonIcon />
    </SkeletonPage>
  );
};

const PopSkeletonPage = () => {
  return (
    <SkeletonPage>
      <SkeletonIcon hasText />
      <SkeletonIcon />
    </SkeletonPage>
  );
};

const MySkeletonPage = () => {
  return (
    <SkeletonPage>
      <SkeletonIcon hasText />
      <SkeletonIcon hasText />
      <SkeletonIcon />
    </SkeletonPage>
  );
};

export const SkeletonPage = Object.assign(BaseSkeletonPage, {
  Home: HomeSkeletonPage,
  Pop: PopSkeletonPage,
  My: MySkeletonPage,
});
