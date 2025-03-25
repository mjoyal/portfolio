import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  background-color: ${({ theme }) => (theme as any).palette.background.default};
  z-index: 10;
  width: 100%;
  height: 90px;
  display: flex;
  padding-left: clamp(20px, 4vw, 48px);
  padding-right: clamp(20px, 4vw, 48px);
`;

const HomeButton = styled.button``;

const Logo = styled.h4`
  font-weight: 600;
  color: white;
`;

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <HomeButton onClick={() => navigate("/")}>
        <Logo>mac</Logo>
      </HomeButton>
    </Container>
  );
};

export default NavBar;
