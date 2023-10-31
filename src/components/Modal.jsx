import React from "react";
import ReactModal from "react-modal";
import theme from "../theme";
import { styled } from "styled-components";

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
  height: "170px",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding: "16px",
  backgroundColor: theme.modal.black,
  border: "none",
  borderRadius: "8px",
  zIndex: "30",
  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
};

const Layout = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Text = styled.div`
  width: 100%;
  font-size: 16px;
  text-align: center;
  height: 20px;
`;

const ShortTextContainer = styled.div`
  position: absolute;
  top: 30px;
  width: 100%;
`;

const LongTextContainer = styled.div`
  position: absolute;
  top: 20px;
  width: 100%;
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  gap: 8px;
`;

const BaseModal = ({ isOpen, onRequestClose, children }) => {
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
      {children}
    </ReactModal>
  );
};

const ShortModal = ({ isOpen, onRequestClose, text, children }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <Layout onClick={(e) => e.stopPropagation()}>
        <ShortTextContainer>
          <Text>{text}</Text>
        </ShortTextContainer>
        <ButtonContainer>{children}</ButtonContainer>
      </Layout>
    </Modal>
  );
};

const LongModal = ({ isOpen, onRequestClose, text1, text2, children }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <Layout onClick={(e) => e.stopPropagation()}>
        <LongTextContainer>
          <Text>{text1}</Text>
          <Text>{text2}</Text>
        </LongTextContainer>
        <ButtonContainer>{children}</ButtonContainer>
      </Layout>
    </Modal>
  );
};

export const Modal = Object.assign(BaseModal, {
  Short: ShortModal,
  Long: LongModal,
});
