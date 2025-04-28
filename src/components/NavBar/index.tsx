import styled from "@emotion/styled";
import { Stack, useTheme } from "@mui/material";
import { useState } from "react";
import Toast from "../Toast";
import { useLocation, useNavigate } from "react-router-dom";
import useSmoothScrollToAnchor from "src/hooks/useSmoothScrollToAnchor";

const Container = styled(Stack)`
  width: 100%;
  height: 60px;
  padding-left: clamp(20px, 5vw, 60px);
  padding-right: clamp(20px, 5vw, 60px);
`;

const StyledLinkText = styled.h5`
  color: ${({ theme }) => (theme as any).palette.text.primary};
  transition: color 0.2s ease-in-out, text-shadow 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => (theme as any).palette.text.secondary};
  }
`;

const HomeButton = styled.button``;

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
        <svg
          width="100"
          height="30"
          viewBox="0 0 152 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.752 18.04V19.336C6.488 20.056 9.032 20.824 11.432 21.64L21.416 24.712V30.424L0.44 21.352V16.024L21.416 6.904V12.616L11.432 15.688C9.32 16.456 6.392 17.272 3.752 18.04ZM129.872 0.183999L120.656 38.248H115.28L124.592 0.183999H129.872ZM148.319 19.24V17.944C145.583 17.224 143.039 16.456 140.591 15.64L130.607 12.568V6.856L151.631 15.928V21.256L130.607 30.376V24.664L140.591 21.592C142.703 20.824 145.631 20.008 148.319 19.24Z"
            fill="#A0C7FF"
          />
          <path
            d="M29.9443 8.44V14.392H30.3762C31.6723 10.168 34.4563 7.864 38.2962 7.864C42.5202 7.864 44.6322 10.456 44.9683 14.632H45.4963C46.6003 10.36 49.2403 7.864 53.4163 7.864C58.1683 7.864 60.4723 10.984 60.4723 15.928V31H55.2882V17.272C55.2882 14.536 54.0403 12.52 51.0163 12.52C47.5122 12.52 45.2563 14.824 45.2563 18.232V31H40.1203V17.272C40.1203 14.536 38.8722 12.52 35.8003 12.52C32.3442 12.52 30.0402 14.824 30.0402 18.232V31H24.9042V8.44H29.9443ZM69.7186 31.48C65.6866 31.48 62.8546 29.56 62.8546 25.144C62.8546 21.112 65.3026 18.184 71.0146 18.184H77.7346V16.648C77.7346 13.72 76.4866 12.04 73.3666 12.04C70.7746 12.04 69.1906 13.384 68.6146 16.024L63.7186 14.92C64.6306 10.648 67.7986 7.912 73.5586 7.912C80.0866 7.912 82.8706 11.032 82.8706 16.6V31H77.9746V25.624H77.4946C76.3426 29.272 73.7026 31.48 69.7186 31.48ZM77.7346 22.504V21.592H71.8786C69.2386 21.592 67.7986 22.552 67.7986 24.424C67.7986 26.008 68.8066 27.448 71.7346 27.448C75.3346 27.448 77.7346 25.336 77.7346 22.504ZM107.065 16.312L102.217 17.224C101.593 14.344 100.249 12.424 96.6489 12.424C92.9529 12.424 90.6489 14.776 90.6489 19.72C90.6489 24.28 92.7609 27.064 96.7929 27.064C98.6169 27.064 99.9129 26.584 100.681 25.576C101.449 24.568 102.025 23.416 102.361 22.072L107.113 23.224C106.153 28.456 103.033 31.624 96.8409 31.624C89.7369 31.624 85.3689 27.448 85.3689 19.912C85.3689 12.28 89.8329 7.864 96.7449 7.864C103.273 7.864 106.105 10.936 107.065 16.312Z"
            fill="#F5F5F5"
          />
        </svg>
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
        message={"Email copied to clipboard"}
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
      />
    </Container>
  );
};

export default NavBar;
