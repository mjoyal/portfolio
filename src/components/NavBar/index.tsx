import styled from "@emotion/styled";
import { Stack } from "@mui/material";
import { useState } from "react";
import Toast from "../Toast";
import { useNavigate } from "react-router-dom";
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

const NavPillButton = styled.button`
  padding: 6px 14px;
  border-radius: 100px;
  background-color: rgba(160, 199, 255, 0.3);
`;

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const scrollToAnchor = useSmoothScrollToAnchor();

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

  return (
    <Container
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <NavPillButton onClick={() => navigate("/")}>
        <h6>Home</h6>
      </NavPillButton>

      <button onClick={() => navigate("/")}>
        <h5>MacKenzie Joyal</h5>
      </button>

      <Stack direction={"row"} gap={2}>
        <NavPillButton onClick={() => scrollToAnchor("about")}>
          <h6>About</h6>
        </NavPillButton>

        <NavPillButton onClick={handleCopy}>
          <h6>Say hi!</h6>
        </NavPillButton>
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
