import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 48px;
  padding-left: clamp(20px, 5vw, 60px);
  padding-right: clamp(20px, 5vw, 60px);
  background-color: ${({ theme }) => (theme as any).palette.background.default};
`;

const HomeButton = styled.button``;

const Logo = styled.h4`
  font-weight: 600;
  color: ${({ theme }) => (theme as any).palette.text.primary};
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
