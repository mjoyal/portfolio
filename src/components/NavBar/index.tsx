import styled from "@emotion/styled";
import { Stack, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import Toast from "../Toast";
import { useLocation, useNavigate } from "react-router-dom";
import useSmoothScrollToAnchor from "src/hooks/useSmoothScrollToAnchor";
import { motion } from "framer-motion";

const Container = styled(Stack)`
  width: 100%;
  height: 60px;
  padding-left: clamp(20px, 4vw, 120px);
  padding-right: clamp(20px, 4vw, 120px);

  @media (min-width: 900px) {
    padding-left: clamp(20px, 2vw, 120px);
    padding-right: clamp(20px, 2vw, 120px);
  }
`;

const NavPillButton = styled(motion.button)`
  padding: 4px 14px;
  border-radius: 100px;
  background-color: rgba(160, 199, 255, 0.3);

  ${({ theme }) => (theme as any).breakpoints.up("sm")} {
    padding: 6px 14px;
  }
`;

const NavButtonText = styled.h6`
  font-size: 1.15rem;
`;

interface INavBarProps {
  hasAnimated: boolean;
}

const NavBar = (props: INavBarProps) => {
  const { hasAnimated } = props;

  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const scrollToAnchor = useSmoothScrollToAnchor();
  const { pathname } = useLocation();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
    <motion.div
      initial={hasAnimated ? false : { y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeInOut", delay: 1.2 }}
    >
      <Container
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        {!isMobile && (
          <NavPillButton
            onClick={() => navigate("/")}
            whileHover={{ boxShadow: "0 0 0 1px #a0c8ff" }}
            transition={{ duration: 0.1, ease: "easeOut" }}
          >
            <NavButtonText>Home</NavButtonText>
          </NavPillButton>
        )}

        <button onClick={() => navigate("/")}>
          <h5>MacKenzie Joyal</h5>
        </button>

        <Stack direction={"row"} gap={{ xs: 1.5, sm: 2 }}>
          {isHomePage && (
            <NavPillButton
              onClick={() => scrollToAnchor("about")}
              whileHover={{ boxShadow: "0 0 0 1px #a0c8ff" }}
              transition={{ duration: 0.1, ease: "easeOut" }}
            >
              <NavButtonText>About</NavButtonText>
            </NavPillButton>
          )}

          <NavPillButton
            onClick={handleCopy}
            whileHover={{ boxShadow: "0 0 0 1px #a0c8ff" }}
            transition={{ duration: 0.1, ease: "easeOut" }}
          >
            <NavButtonText>Say hi!</NavButtonText>
          </NavPillButton>
        </Stack>
        <Toast
          message="Email copied. Chat soon :)"
          isOpen={isOpen}
          handleClose={() => setIsOpen(false)}
          verticalOrigin="top"
        />
      </Container>
    </motion.div>
  );
};

export default NavBar;
