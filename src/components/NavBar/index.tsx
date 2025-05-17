import styled from "@emotion/styled";
import { Box, Stack } from "@mui/material";
import { useState } from "react";
import Toast from "../Toast";
import { useLocation, useNavigate } from "react-router-dom";
import useSmoothScrollToAnchor from "src/hooks/useSmoothScrollToAnchor";

const Container = styled(Stack)`
  width: 100%;
  height: 60px;

  padding-left: clamp(20px, 4vw, 120px);
  padding-right: clamp(20px, 4vw, 120px);

  @media (min-width: 900px) {
    padding-left: clamp(20px, 8vw, 120px);
    padding-right: clamp(20px, 8vw, 120px);
  }
`;

const StyledLinkText = styled.h5`
  color: ${({ theme }) => (theme as any).palette.text.primary};
  transition: color 0.2s ease-in-out, text-shadow 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => (theme as any).palette.text.secondary};
  }
  font-weight: 500;
`;

const HomeButton = styled.button``;

const Logo = styled.h4`
  font-weight: 700;
  letter-spacing: -0.8px;
`;

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const scrollToAnchor = useSmoothScrollToAnchor();
  const { pathname } = useLocation();

  const handleCopy = async () => {
    try {
      const myEmail = "mackenzie.joyal@gmail.com";
      await navigator.clipboard.writeText(myEmail);

      setIsOpen(true);
    } catch (err) {
      console.error("Failed to copy: ", err);
      alert("Copy failed. Try again.");
    }
  };

  const isHomePage = pathname === "/";

  return (
    <Container
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <HomeButton onClick={() => navigate("/")}>
        <Logo>
          {`m`}
          <Box component="span" color="text.secondary">
            {"/>"}
          </Box>
        </Logo>
      </HomeButton>

      <Stack direction={"row"} gap={5}>
        {isHomePage ? (
          <button onClick={() => scrollToAnchor("work")}>
            <StyledLinkText>work</StyledLinkText>
          </button>
        ) : (
          <button onClick={() => navigate("/")}>
            <StyledLinkText>home</StyledLinkText>
          </button>
        )}

        <button onClick={handleCopy}>
          <StyledLinkText>say hi!</StyledLinkText>
        </button>
      </Stack>
      <Toast
        message="Email copied – chat soon :)"
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
      />
    </Container>
  );
};

export default NavBar;
