import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Modal } from "../../../components/Modal";
import theme from "../../../theme";
import ModalButton from "../../../components/ModalButton";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import uploadFileState from "../../../recoil/uploadImage/atom";
import { handleInstagramLogin } from "../../../utils/handleInstagramLogin";

const Layout = styled.div`
  width: 100%;
  height: 96px;
  border: 1px solid #5f6368;
  border-radius: 8px;
  color: #5f6368;
  font-size: 16px;
`;

const Label = styled.label`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const UploadText = styled.div`
  height: 24px;
  display: flex;
  gap: 4px;
  align-items: center;
`;

const Input = styled.input`
  display: none;
`;

const UploadButton = ({ isLinked }) => {
  const [uploadFile, setUploadFile] = useRecoilState(uploadFileState);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleLabelClick = (e) => {
    if (!isLinked) {
      setIsModalOpen(true);
    }
  };

  const uploadImage = (e) => {
    const file = e.target.files[0];
    setUploadFile(file);
  };

  useEffect(() => {
    if (uploadFile.name) {
      navigate("/upload");
    }
  }, [uploadFile, navigate]);

  return (
    <Layout>
      <Label htmlFor="upload" onClick={handleLabelClick}>
        <UploadText>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 5L11.2929 4.29289L12 3.58579L12.7071 4.29289L12 5ZM13 14C13 14.5523 12.5523 15 12 15C11.4477 15 11 14.5523 11 14L13 14ZM6.29289 9.29289L11.2929 4.29289L12.7071 5.70711L7.70711 10.7071L6.29289 9.29289ZM12.7071 4.29289L17.7071 9.29289L16.2929 10.7071L11.2929 5.70711L12.7071 4.29289ZM13 5L13 14L11 14L11 5L13 5Z"
              fill="currentColor"
            />
            <path
              d="M5 16L5 17C5 18.1046 5.89543 19 7 19L17 19C18.1046 19 19 18.1046 19 17V16"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
          사진을 업로드해보세요!
        </UploadText>
      </Label>
      <Input
        id="upload"
        type="file"
        accept="image/*"
        disabled={!isLinked}
        onChange={uploadImage}
      />
      <Modal.Long
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        text1="인스타그램 계정을 연결하여"
        text2="축팅의 모든 서비스를 이용해보세요!"
      >
        <ModalButton
          isLong
          onClick={handleInstagramLogin}
          iconSrc="/icons/instagram.png"
          bgColor={theme.pink}
          text="인스타그램 연결하기"
        />
      </Modal.Long>
    </Layout>
  );
};

export default UploadButton;
