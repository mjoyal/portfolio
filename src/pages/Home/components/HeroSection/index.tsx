import styled from "@emotion/styled";
import { Box } from "@mui/material";
import PreText from "./components/PreText";

const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  height: 60vh;
  gap: 1rem;

  ${({ theme }) => (theme as any).breakpoints.up("md")} {
    justify-content: center;
    align-items: flex-end;
    gap: 2rem;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const HeroText = styled.h4`
  font-weight: 600;
  font-size: clamp(6rem, 22vw, 16rem);
  letter-spacing: -0.05em;
  line-height: 1;
  text-align: left;
`;

const IntroText = styled.h6`
  width: 400px;
  max-width: 100%;

  ${({ theme }) => (theme as any).breakpoints.up("md")} {
    margin-right: 2rem;
  }
`;

const HeroSection = () => {
  //TODO: Come back to the arrow
  // const theme = useTheme();
  // const scrollToAnchor = useSmoothScrollToAnchor();
  // "Making The internet prettier since 2019"
  return (
    <HeroContainer>
      <TextContainer>
        <HeroText>
          <PreText />
          Design Engineer
          <Box component="span" color="text.secondary">
            .
          </Box>
        </HeroText>
      </TextContainer>

      <IntroText>
        I specialize in app design, mobile-first UI/UX, and UI
        engineering—always built with strategy, detail, and scalability in mind.
      </IntroText>
    </HeroContainer>
  );
};

export default HeroSection;
