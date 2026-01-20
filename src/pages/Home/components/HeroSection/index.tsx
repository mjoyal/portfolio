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
    margin-top: 25px;
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
  width: 500px;
  max-width: 100%;
  margin-top: 25px;
  font-size: 1.25rem;

  ${({ theme }) => (theme as any).breakpoints.up("md")} {
    margin-right: 3rem;
  }
`;

interface IHeroSectionProps {
  hasAnimated: boolean;
}

const HeroSection = (props: IHeroSectionProps) => {
  const { hasAnimated } = props;
  //TODO: Come back to the arrow
  // const theme = useTheme();
  // const scrollToAnchor = useSmoothScrollToAnchor();
  // "Making The internet prettier since 2019"
  return (
    <HeroContainer>
      <TextContainer>
        <HeroText>
          <motion.div
            initial={hasAnimated ? false : { x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          >
            <PreText />
          </motion.div>

          <motion.div
            initial={hasAnimated ? false : { x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          >
            Design Engineer
            <Box component="span" color="text.secondary">
              .
            </Box>
          </motion.div>
        </HeroText>
      </TextContainer>

      <motion.div
        initial={hasAnimated ? false : { y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        style={{ maxWidth: "100%" }}
      >
        <IntroText>
          I bridge design and development to make interfaces that are memorable
          and intuitive—always with product strategy, scalability, and human
          behavior in mind.
        </IntroText>
      </motion.div>
    </HeroContainer>
  );
};

export default HeroSection;
