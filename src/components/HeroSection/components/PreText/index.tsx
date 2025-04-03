import styled from "@emotion/styled";
import { Box } from "@mui/material";

const StyledPreText = styled.p`
  position: absolute;
  font-size: 1.5rem;
  line-height: 1;
  letter-spacing: -0.03em;
  top: -7%;
  left: 10%;

  ${({ theme }) => (theme as any).breakpoints.up("sm")} {
    font-size: clamp(1.25rem, 3vw, 1.75rem);
    top: -2.5%;
    left: 25%;
  }

  ${({ theme }) => (theme as any).breakpoints.up("md")} {
    top: 5%;
    left: 30%;
  }

  ${({ theme }) => (theme as any).breakpoints.up("lg")} {
    left: 33%;
    top: 10%;
  }
`;

const PreText = () => {
  return (
    <StyledPreText>
      <Box component="span" color="text.secondary">
        [
      </Box>{" "}
      your favourite
      <Box component="span" color="text.secondary">
        {" "}
        ]
      </Box>
    </StyledPreText>
  );
};

export default PreText;
