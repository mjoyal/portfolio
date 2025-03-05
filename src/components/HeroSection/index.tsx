import styled from "@emotion/styled";
import { Box } from "@mui/material";

import { useTheme } from "@mui/system";

const HeroContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => (theme as any).palette.background.primary};
  display: flex;
  justify-content: center;ß
  align-items: center;
  position: relative; /* Allows absolute positioning for child elements */
`;

const TextContainer = styled.div`
  position: relative; /* Needed for absolute children */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;

const HeroText = styled.div`
  font-size: clamp(3rem, 22vw, 14rem);
  letter-spacing: -0.05em;
  line-height: 0.8;
  text-align: start;
  background-color: ${({ theme }) => (theme as any).palette.background.primary};
`;

// const HeroText = styled.h1`
//   @media (max-width: ${breakpoints.small}) {
//     font-size: 18vw;
//   }

//   @media (max-width: ${breakpoints.medium}) {
//     font-size: 22vw;
//   }

//   font-size: 16vw;
//   line-height: 0.8;
//   letter-spacing: -0.05em;
//   text-align: start;
//   margin: 10px;
// `;

// Different text positions

const PreText = styled.p`
  position: absolute;

  font-size: 1.75vw;
  left: 35%;
  top: 0;
`;

const BioText = styled.p`
  position: absolute;
`;

const FooterText = styled.p`
  position: absolute;
  bottom: -25%;
  left: 25%;
`;

const HeroSection = () => {
  const theme = useTheme();

  console.log(theme.breakpoints.values);

  return (
    <HeroContainer>
      <TextContainer>
        {/* <PreText>
          <Box component="span" color="text.secondary">
            [
          </Box>{" "}
          your favourite <span style={{ color: "#E6F187" }}>]</span>
        </PreText> */}
        <HeroText>
          Creative
          <br />
          Developer
          <Box component="span" color="text.secondary">
            .
          </Box>
        </HeroText>
        {/* <BioText>
          <Box component="span" color="text.secondary">
            *
          </Box>{" "}
          specialist in ux/ui, web design, &<br />
          front-end development.
        </BioText>
        <FooterText>[ making the internet prettier since 2019 ]</FooterText> */}
      </TextContainer>
    </HeroContainer>
  );
};

export default HeroSection;
