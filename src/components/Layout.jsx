import { styled } from "styled-components";

const Container = styled.div`
  width: 390px;
  height: calc(100vh - 57px);
  height: calc(100dvh - 57px); /* Mobile */
  background-color: ${(props) => props.theme.black};
  overflow: auto;
  position: relative;

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

const Layout = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Layout;
