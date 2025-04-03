import styled from "@emotion/styled";
import { Box } from "@mui/material";

const StyledPreText = styled.p`
  position: absolute;
  // font-size: clamp(1.15rem, 3vw, 1.75rem);
  font-size: 1.25rem;
  line-height: 1;
  letter-spacing: -0.03em;
  top: -5%;
  left: 20%;

  ${({ theme }) => (theme as any).breakpoints.up("md")} {
    left: 25%;
    top: 0;
  }

  ${({ theme }) => (theme as any).breakpoints.up("lg")} {
    left: 30%;
    top: 0;
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
