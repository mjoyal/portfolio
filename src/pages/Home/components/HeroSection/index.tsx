import styled from "@emotion/styled";
import { Box } from "@mui/material";
import PreText from "./components/PreText";
import { motion } from "framer-motion";

const HeroContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  height: 55vh;
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
  // font-size: clamp(6rem, 24vw, 16rem);
  font-size: 26vw;
  letter-spacing: -0.05em;
  line-height: 0.85;
  text-align: left;

  ${({ theme }) => (theme as any).breakpoints.up("md")} {
    font-size: 15.5vw;
    white-space: nowrap;
    line-height: 1;
  }
`;

const IntroText = styled.h6`
  width: 400px;
  max-width: 100%;
  margin-top: 40px;

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
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeIn", delay: 0 }}
          >
            <PreText />
          </motion.div>

          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeIn", delay: 1 }}
          >
            Design Engineer
            <Box component="span" color="text.secondary">
              .
            </Box>
          </motion.div>
        </HeroText>
      </TextContainer>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeIn", delay: 1.8 }}
        style={{ maxWidth: "100%" }}
      >
        <IntroText>
          I specialize in app design, mobile-first UI/UX, and UI
          engineering—always built with strategy, detail, and scalability in
          mind.
        </IntroText>
      </motion.div>
    </HeroContainer>
  );
};

export default HeroSection;
