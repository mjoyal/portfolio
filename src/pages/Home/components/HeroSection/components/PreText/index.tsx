import styled from "@emotion/styled";
import { Box } from "@mui/material";

const StyledPreText = styled.p`
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1;
  letter-spacing: -0.03em;
  margin-left: 2%;
  margin-bottom: -1%;
  font-style: italic;

  ${({ theme }) => (theme as any).breakpoints.up("sm")} {
    margin-left: 10%;
    margin-bottom: -1%;
  }

  ${({ theme }) => (theme as any).breakpoints.up("md")} {
    margin-bottom: -3%;
  }
`;

const PreText = () => {
  return (
    <StyledPreText>
      <Box component="span" color="text.secondary">
        (
      </Box>{" "}
      your new favourite
      <Box component="span" color="text.secondary">
        {" "}
        )
      </Box>
    </StyledPreText>
  );
};

export default PreText;
