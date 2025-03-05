import styled from "@emotion/styled";
import { Box } from "@mui/material";
import PreText from "./components/PreText";

const HeroContainer = styled.div`
  position: relative; /* Allows absolute positioning for child elements */
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => (theme as any).palette.background.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
`;

const TextContainer = styled.div`
  position: relative; /* Needed for absolute children */
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: blue;
  padding-bottom: 80px;
`;

const HeroText = styled.div`
  font-size: clamp(3rem, 17vw, 13rem);
  letter-spacing: -0.05em;
  line-height: 1;
  text-align: start;
  background-color: ${({ theme }) => (theme as any).palette.background.primary};
  margin-top: 20px;
`;

const BioText = styled.p`
  position: absolute;
  bottom: 0;
  right: 20%;
  text-align: left;

  ${({ theme }) => (theme as any).breakpoints.up("md")} {
    right: 40%;
  }

  ${({ theme }) => (theme as any).breakpoints.up("md")} {
    top: 15%;
    right: 0;
  }

  ${({ theme }) => (theme as any).breakpoints.up("md")} {
    top: 15%;
    right: 10%;
  }
`;

const FooterText = styled.p`
  position: absolute;
  bottom: 5%;
  left: 25%;
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <TextContainer>
        <PreText />
        <HeroText>
          Creative
          <br />
          Developer
          <Box component="span" color="text.secondary">
            .
          </Box>
        </HeroText>
        <BioText>
          {" "}
          specialist in ux/ui, web design, & <br /> front-end development.
        </BioText>
      </TextContainer>
      <FooterText>[ making the internet prettier since 2019 ]</FooterText>
    </HeroContainer>
  );
};

export default HeroSection;
