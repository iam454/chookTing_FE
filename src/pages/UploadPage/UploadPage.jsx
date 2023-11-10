import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import styled from "styled-components";
import ModalButton from "../../components/ModalButton";
import theme from "../../theme";
import Post from "../../components/Post";
import PostInfos from "../../components/PostInfos";
import { useRecoilState, useSetRecoilState } from "recoil";
import uploadFileState from "../../recoil/uploadImage/atom";
import { useNavigate } from "react-router-dom";
import uploadContentsState from "../../recoil/uploadContents/atom";
import { useMutation } from "@tanstack/react-query";
import { createPost } from "../../apis/api/post";

const Container = styled.div`
  width: 310px;
  height: 90%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ImageBox = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 8px;
`;

const InputBox = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Input = styled.input`
  width: 100%;
  height: 44px;
  padding: 12px;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.modal.black};
  font-size: 14px;
  border: none;
  border-radius: 8px;
  outline: none;

  &::placeholder {
    color: ${(props) => props.theme.white};
  }
`;

const ButtonBlock = styled.div`
  display: flex;
  gap: 8px;
`;

const ALLOWED_TEXT_REG_EXP = /^[a-z|A-Z|가-힣|ㄱ-ㅎ|ㅏ-ㅣ|0-9| \t|]+$/;
const NOT_ALLOWED_TEXT_REG_EXP = /[{}[\]/?.;:|)*~`!^\\\-_+<>@#$%&=('"₩€£¥•“’‘]/;

const isEmptyValue = (value) => {
  return !value.length;
};

const UploadPage = () => {
  const [uploadFile, setUploadFile] = useRecoilState(uploadFileState);
  const setUploadContents = useSetRecoilState(uploadContentsState);
  const [name, setName] = useState("");
  const [inputHashtag, setInputHashtag] = useState("");
  const [hashtags, setHashtags] = useState([]);
  const navigate = useNavigate();
  const { mutate } = useMutation(createPost, {
    onSuccess: () => {
      navigate("/upload-done");
    },
    onError: () => {
      alert("업로드에 실패하였습니다.");
    },
  });

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

  const handleNameChange = (e) => {
    const newName = e.target.value;
    if (!ALLOWED_TEXT_REG_EXP.test(newName)) {
      setName("");
      return;
    }
    setName(newName);
  };

  const handleNameKeyDown = (e) => {
    if (e.code !== "Enter" && e.code !== "NumpadEnter") {
      return;
    }
    e.preventDefault();
  };

  const handleInputHashtagChange = (e) => {
    const newHashtag = e.target.value;
    if (NOT_ALLOWED_TEXT_REG_EXP.test(newHashtag)) {
      setInputHashtag("");
      return;
    }
    setInputHashtag(newHashtag);
  };

  const addHashtag = (e) => {
    const ALLOWED_COMMANDS = ["Comma", "Enter", "Space", "NumpadEnter"];
    if (!ALLOWED_COMMANDS.includes(e.code)) {
      return;
    }

    let newHashtag = e.target.value.trim();
    if (isEmptyValue(newHashtag) || hashtags.length >= 2) {
      return setInputHashtag("");
    }
    if (newHashtag.includes(",")) {
      newHashtag = newHashtag.split(",").join("");
    }
    if (isEmptyValue(newHashtag)) {
      return;
    }

    setHashtags((prevHashtags) => {
      return [...new Set([...prevHashtags, newHashtag])];
    });
    setInputHashtag("");
  };

  const handleHashtagKeyDown = (e) => {
    if (e.code !== "Enter" && e.code !== "NumpadEnter") {
      return;
    }
    e.preventDefault();
    if (!ALLOWED_TEXT_REG_EXP.test(e.target.value)) {
      setInputHashtag("");
    }
  };

  const handleHashtagClick = (e) => {
    const deleteTarget = e.target.textContent.slice(1);
    const newHashtags = hashtags.filter((hashtag) => hashtag !== deleteTarget);
    setHashtags(newHashtags);
  };

  const handleUploadClick = (e) => {
    e.preventDefault();
    if (!name) {
      alert("닉네임을 입력해주세요.");
      return;
    }
    setUploadContents({ name: name.trim(), hashtags });

    const payload = new FormData();
    payload.append("image", uploadFile);
    payload.append("nickname", name.trim());
    payload.append("hashTags", hashtags);
    mutate(payload);
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    setUploadFile({});
    navigate("/profile");
  };

  return (
    <Layout>
      <Container>
        <ImageBox>
          <Post
            image={createImageUrl(uploadFile)}
            info={
              <PostInfos
                name={name || "닉네임(필수)"}
                hashtags={hashtags}
                onClick={handleHashtagClick}
              />
            }
          />
        </ImageBox>
        <InputBox>
          <label htmlFor="name">
            <Input
              id="name"
              value={name}
              placeholder="닉네임(필수)"
              onChange={handleNameChange}
              onKeyDown={handleNameKeyDown}
              type="text"
              maxLength={12}
              required
            />
          </label>
          <label htmlFor="hashtags">
            <Input
              id="hashtags"
              value={inputHashtag}
              placeholder="해시태그를 등록해보세요! (최대 2개)"
              onChange={handleInputHashtagChange}
              onKeyUp={addHashtag}
              onKeyDown={handleHashtagKeyDown}
              type="text"
              maxLength={8}
            />
          </label>
          <ButtonBlock>
            <ModalButton
              text="취소"
              isTextBlack
              bgColor={theme.modal.gray}
              onClick={handleCancelClick}
            />
            <ModalButton
              text="업로드"
              isTextBlack
              bgColor={theme.white}
              onClick={handleUploadClick}
            />
          </ButtonBlock>
        </InputBox>
      </Container>
    </Layout>
  );
};

export default UploadPage;
