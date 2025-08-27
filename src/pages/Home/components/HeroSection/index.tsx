import styled from "@emotion/styled";
import { Box } from "@mui/material";
import PreText from "./components/PreText";
import { motion } from "framer-motion";

const HeroContainer = styled.div`
  position: relative;
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
  line-height: 1;
  text-align: left;

  ${({ theme }) => (theme as any).breakpoints.up("md")} {
    font-size: 15.5vw;
    white-space: nowrap;
  }
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
          {/* <motion.div
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeIn", delay: 0 }}
            viewport={{ once: true, amount: 0.1 }}
          > */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeIn", delay: 0 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <PreText />
          </motion.div>

          {/* </motion.div> */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeIn", delay: 0.8 }}
            viewport={{ once: true, amount: 0.1 }}
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
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeIn", delay: 1.8 }}
        viewport={{ once: true, amount: 0.1 }}
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
