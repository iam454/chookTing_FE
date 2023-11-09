import React, { useEffect } from "react";
import Layout from "../../components/Layout";
import styled from "styled-components";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import uploadFileState from "../../recoil/uploadImage/atom";
import uploadContentsState from "../../recoil/uploadContents/atom";
import Post from "../../components/Post";
import PostInfos from "../../components/PostInfos";

const Container = styled.div`
  width: 358px;
  height: 90%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  background-color: ${(props) => props.theme.modal.black};
  border-radius: 8px;
  padding: 24px;
`;

const Text = styled.header`
  font-size: 20px;
  font-weight: 500;
  padding: 8px 0;
`;

const ImageBox = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 8px;
`;

const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
`;

const UploadDonePage = () => {
  const navigate = useNavigate();
  const [uploadFile, setUploadFile] = useRecoilState(uploadFileState);
  const [uploadContents, setUploadContents] =
    useRecoilState(uploadContentsState);

  useEffect(() => {
    if (!uploadFile.name) {
      navigate("/profile");
    }
  }, [uploadFile, navigate]);

  const createImageUrl = (file) => {
    if (!uploadFile.name) {
      return;
    }
    const imageUrl = URL.createObjectURL(file);
    return imageUrl;
  };

  const handleConfirmButtonClick = () => {
    setUploadFile({});
    setUploadContents({});
    navigate("/profile");
  };

  return (
    <Layout>
      <Container>
        <Text>업로드 완료!</Text>
        <ImageBox>
          <Post
            image={createImageUrl(uploadFile)}
            info={
              <PostInfos
                name={uploadContents.name}
                hashtags={uploadContents.hashtags}
              />
            }
          />
        </ImageBox>
        <ButtonBox>
          <Button
            text="스토리 공유하기"
            width="222px"
            iconSrc="/icons/instagram.png"
            onClick={() => {
              alert("미구현 기능입니다.");
            }}
          />
          <Button text="확인" width="80px" onClick={handleConfirmButtonClick} />
        </ButtonBox>
      </Container>
    </Layout>
  );
};

export default UploadDonePage;
