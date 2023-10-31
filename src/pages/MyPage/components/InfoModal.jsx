import React from "react";
import ReactModal from "react-modal";
import theme from "../../../theme";
import styled from "styled-components";

const overlay = {
  width: "390px",
  height: "100vh",
  height: "100dvh",
  margin: "0 auto",
  backgroundColor: theme.modal.dim,
  zIndex: "20",
};

const content = {
  width: "342px",
  height: "376px",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding: "16px 16px 8px",
  backgroundColor: theme.modal.black,
  border: "none",
  borderRadius: "8px",
  zIndex: "30",
  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
};

const Header = styled.header`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  gap: 8px;
  padding-bottom: 12px;
  border-bottom: 1px solid ${(props) => props.theme.white};
`;

const List = styled.ul`
  padding-top: 4px;
`;

const Item = styled.li`
  width: 294px;
  height: 60px;
  margin: 0 auto;
  display: flex;
  gap: 8px;
  padding: 12px 4px;
  border-bottom: 1px solid ${(props) => props.theme.modal.gray};

  &:last-child {
    padding-bottom: 0;
    border-bottom: none;
  }
`;

const Icon = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.icon.white};
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
`;

const TextBox = styled.p`
  display: flex;
  flex-direction: column;
`;

const SmallText = styled.span`
  font-size: 12px;
  height: 16px;
  color: ${(props) => props.theme.modal.lightGray};
`;

const LargeText = styled.span`
  font-size: 16px;
  height: 20px;
  font-weight: 600;
`;

const InfoModal = ({ isOpen, onRequestClose }) => {
  ReactModal.setAppElement(document.getElementById("modal"));

  const preventScroll = () => {
    document.body.style.overflow = "hidden";
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{ overlay, content }}
      onAfterOpen={preventScroll}
    >
      <Header>
        <img src="/icons/fireworks.png" alt="폭죽" width="18" height="18" />
        폭죽 획득하기
      </Header>
      <List>
        <Item>
          <Icon>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 11C3 7.22876 3 5.34315 4.17157 4.17157C5.34315 3 7.22876 3 11 3H13C16.7712 3 18.6569 3 19.8284 4.17157C21 5.34315 21 7.22876 21 11V13C21 16.7712 21 18.6569 19.8284 19.8284C18.6569 21 16.7712 21 13 21H11C7.22876 21 5.34315 21 4.17157 19.8284C3 18.6569 3 16.7712 3 13V11Z"
                stroke="currentColor"
                strokeWidth="2"
              />
              <circle cx="16.5" cy="7.5" r="1.5" fill="currentColor" />
              <circle
                cx="12"
                cy="12"
                r="3"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </Icon>
          <TextBox>
            <SmallText>SNS 계정 연결하고</SmallText>
            <LargeText>200 폭죽 받기</LargeText>
          </TextBox>
        </Item>
        <Item>
          <Icon>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 11C3 7.22876 3 5.34315 4.17157 4.17157C5.34315 3 7.22876 3 11 3H13C16.7712 3 18.6569 3 19.8284 4.17157C21 5.34315 21 7.22876 21 11V13C21 16.7712 21 18.6569 19.8284 19.8284C18.6569 21 16.7712 21 13 21H11C7.22876 21 5.34315 21 4.17157 19.8284C3 18.6569 3 16.7712 3 13V11Z"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.9997 13.5854L18.9794 13.5651C18.5898 13.1754 18.2537 12.8393 17.9536 12.5864C17.6367 12.3193 17.2917 12.0845 16.8665 11.9562C16.3014 11.7857 15.6986 11.7857 15.1335 11.9562C14.7083 12.0845 14.3633 12.3193 14.0464 12.5864C13.7463 12.8393 13.4102 13.1754 13.0206 13.5651L12.9921 13.5936C12.6852 13.9004 12.5046 14.0795 12.3645 14.1954L12.3443 14.2118L12.3317 14.1891C12.2447 14.0295 12.1435 13.7961 11.9726 13.3972L11.9191 13.2726L11.8971 13.2211L11.897 13.221C11.5411 12.3904 11.2422 11.693 10.9464 11.1673C10.6416 10.6257 10.2618 10.1178 9.66982 9.82106C9.17604 9.57352 8.6235 9.46711 8.07311 9.51356C7.41323 9.56924 6.87197 9.89977 6.38783 10.2894C5.98249 10.6157 5.52754 11.0598 5 11.5859V12.9999C5 13.5166 5.0003 13.9848 5.00308 14.411L6.117 13.2971C6.80615 12.6079 7.26639 12.1497 7.64186 11.8475C8.01276 11.5489 8.17233 11.5123 8.24128 11.5065C8.42475 11.491 8.60893 11.5265 8.77352 11.609C8.83539 11.64 8.96994 11.7333 9.20344 12.1482C9.43981 12.5682 9.69693 13.1646 10.0809 14.0605L10.1343 14.1851L10.1506 14.2232C10.2995 14.5707 10.4378 14.8936 10.5759 15.1468C10.7206 15.412 10.9308 15.7299 11.2847 15.9489C11.702 16.2072 12.1997 16.3031 12.6831 16.2182C13.093 16.1463 13.4062 15.9292 13.6391 15.7367C13.8613 15.5529 14.1096 15.3045 14.3769 15.0371L14.377 15.0371L14.4063 15.0078C14.8325 14.5816 15.1083 14.307 15.3353 14.1157C15.5526 13.9325 15.6552 13.8878 15.7112 13.8709C15.8995 13.8141 16.1005 13.8141 16.2888 13.8709C16.3448 13.8878 16.4474 13.9325 16.6647 14.1157C16.8917 14.307 17.1675 14.5816 17.5937 15.0078L18.9441 16.3582C18.9902 15.6404 18.9983 14.7479 18.9997 13.5854Z"
                fill="currentColor"
              />
              <circle cx="16.5" cy="7.5" r="1.5" fill="currentColor" />
            </svg>
          </Icon>
          <TextBox>
            <SmallText>내 사진 업로드하고</SmallText>
            <LargeText>매번 300 폭죽 받기</LargeText>
          </TextBox>
        </Item>
        <Item>
          <Icon>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.45067 13.9082L11.4033 20.4395C11.6428 20.6644 11.7625 20.7769 11.9037 20.8046C11.9673 20.8171 12.0327 20.8171 12.0963 20.8046C12.2375 20.7769 12.3572 20.6644 12.5967 20.4395L19.5493 13.9082C21.5055 12.0706 21.743 9.0466 20.0978 6.92607L19.7885 6.52734C17.8203 3.99058 13.8696 4.41601 12.4867 7.31365C12.2913 7.72296 11.7087 7.72296 11.5133 7.31365C10.1304 4.41601 6.17972 3.99058 4.21154 6.52735L3.90219 6.92607C2.25695 9.0466 2.4945 12.0706 4.45067 13.9082Z"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </Icon>
          <TextBox>
            <SmallText>좋아요 누르고</SmallText>
            <LargeText>매번 20 폭죽 받기</LargeText>
          </TextBox>
        </Item>
        <Item>
          <Icon>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M7.88124 15.7559C8.37391 16.1826 9.02309 16.4909 9.72265 16.6928C10.4301 16.897 11.2142 17 12 17C12.7858 17 13.5699 16.897 14.2774 16.6928C14.9769 16.4909 15.6261 16.1826 16.1188 15.7559"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle
                cx="9"
                cy="10"
                r="1.25"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="0.5"
                strokeLinecap="round"
              />
              <circle
                cx="15"
                cy="10"
                r="1.25"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="0.5"
                strokeLinecap="round"
              />
            </svg>
          </Icon>
          <TextBox>
            <SmallText>내 사진 좋아요 LV.2 달성하고</SmallText>
            <LargeText>매번 200 폭죽 받기</LargeText>
          </TextBox>
        </Item>
        <Item>
          <Icon>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M9.40192 13.5C9.66523 13.9561 10.0439 14.3348 10.5 14.5981C10.9561 14.8614 11.4734 15 12 15C12.5266 15 13.0439 14.8614 13.5 14.5981C13.9561 14.3348 14.3348 13.9561 14.5981 13.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <rect
                x="6.875"
                y="7.875"
                width="3.25"
                height="2.25"
                rx="1.125"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="0.25"
                strokeLinecap="round"
              />
              <rect
                x="13.875"
                y="7.875"
                width="3.25"
                height="2.25"
                rx="1.125"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="0.25"
                strokeLinecap="round"
              />
            </svg>
          </Icon>
          <TextBox>
            <SmallText>내 사진 좋아요 LV.3 달성하고</SmallText>
            <LargeText>매번 500 폭죽 받기</LargeText>
          </TextBox>
        </Item>
      </List>
    </ReactModal>
  );
};

export default InfoModal;
