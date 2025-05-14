import styled from "@emotion/styled";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import Spacer from "src/components/Spacer";

export const StyledP = styled.p<{ isHidden?: boolean }>`
  max-width: 400px;
  display: ${({ isHidden = false }) => (isHidden ? "none" : "block")};
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  border-radius: 3px;
`;

export const ProjectPageContainer = styled(Box)`
  /* These 100% widths are important to keep the overall margin of the site */
  width: 100%;
  min-height: 100vh;
  margin-top: 40px;
  ${({ theme }) => (theme as any).breakpoints.up("md")} {
    padding-left: 60px;
    padding-right: 60px;
  }
`;

export const PhoneMockImage = styled.img`
  width: 300px;
  height: 100%;
`;

export const SectionTitle = styled.h4`
  max-width: 700px;
  margin-bottom: 20px;
`;

export const SectionDivider = () => {
  const theme = useTheme();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return isSmallScreen ? <Spacer level={8} /> : <Spacer level={30} />;
};
