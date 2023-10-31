import Layout from "../../components/Layout";
import styled from "styled-components";
import Post from "../../components/Post";
import { useNavigate } from "react-router-dom";
import Button from "./components/Button";

const Container = styled.div`
  width: 342px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px 0 0 0;
`;

const ImgBox = styled.div`
  width: 304px;
  height: 457px;
  overflow: hidden;
  margin-top: 5px auto;
  box-shadow: 0px 0px 20px 10px rgba(0, 0, 0, 0.6);
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-top: 20px;
`;

const DownloadButton = styled.button`
  width: 44px;
  height: 44px;
  background-color: ${(props) => props.theme.white};
  border-radius: 8px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ToUploadPage = () => {
  const navigate = useNavigate();

  // 로그인 여부 확인
  let isLogined = true;

  // 이미지 불러오기
  const imageSrc = "/sample.png";

  //불러온 이미지를 recoil에 저장

  return (
    <Layout>
      <Container>
        <ImgBox>
          <Post image={imageSrc} />
        </ImgBox>
        <ButtonBox>
          <DownloadButton
            onClick={() => {
              console.log("다운로드 버튼 클릭");
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 14L11.2929 14.7071L12 15.4142L12.7071 14.7071L12 14ZM13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44771 11 5L13 5ZM6.29289 9.70711L11.2929 14.7071L12.7071 13.2929L7.70711 8.29289L6.29289 9.70711ZM12.7071 14.7071L17.7071 9.70711L16.2929 8.29289L11.2929 13.2929L12.7071 14.7071ZM13 14L13 5L11 5L11 14L13 14Z"
                fill="#202124"
              />
              <path
                d="M5 16L5 17C5 18.1046 5.89543 19 7 19L17 19C18.1046 19 19 18.1046 19 17V16"
                stroke="#202124"
                strokeWidth="2"
              />
            </svg>
          </DownloadButton>
          <Button
            width="284px"
            iconSrc="/icons/fireworks.png"
            text="축팅 업로드"
            onClick={() => {
              // 페이지 이동하기
              isLogined ? navigate("/upload") : navigate("/profile");
            }}
          />
        </ButtonBox>
        <Button
          width="200px"
          text="아니요. 안 할래요!"
          isReversed
          onClick={() => {
            navigate("/profile");
          }}
        />
      </Container>
    </Layout>
  );
};

export default ToUploadPage;
