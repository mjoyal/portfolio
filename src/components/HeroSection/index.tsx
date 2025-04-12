import styled from "@emotion/styled";
import { Box, Stack, useMediaQuery, useTheme } from "@mui/material";
import PreText from "./components/PreText";
import LittleArrow from "src/icons/LittleArrow";

const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  ${({ theme }) => (theme as any).breakpoints.up("md")} {
    height: 92vh;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-bottom: 75px;

  ${({ theme }) => (theme as any).breakpoints.up("md")} {
  }
`;

const HeroText = styled.h4`
  font-weight: 600;
  font-size: clamp(5.5rem, 20vw, 14rem);
  letter-spacing: -0.05em;
  line-height: 1;
  text-align: left;
`;

const FooterText = styled.p`
  font-size: clamp(1.35rem, 3vw, 1.75rem);
  font-weight: 400;
  text-align: center;
`;

const HeroSection = () => {
  const theme = useTheme();

  const isMedium = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <HeroContainer>
      <TextContainer>
        <HeroText>
          <PreText />
          Creative
          <br />
          Developer
          <Box component="span" color="text.secondary">
            .
          </Box>
        </HeroText>
      </TextContainer>
      <Stack
        sx={{
          width: "100%",
          position: "absolute",
          bottom: 35,
        }}
        gap={{ xs: 5, md: 10 }}
        direction={"row"}
        justifyContent={{ xs: "center", md: "flex-end" }}
        alignItems={"flex-end"}
      >
        <FooterText>making the internet prettier since 2019</FooterText>
        {isMedium && <LittleArrow />}
      </Stack>
    </HeroContainer>
  );
};

export default HeroSection;
