import styled from "@emotion/styled";
import { breakpoints } from "../../constants/styles";

const HeroContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative; /* Allows absolute positioning for child elements */
  @media (max-width: ${breakpoints.medium}) {
    height: 70vh;
  }
`;

const TextContainer = styled.div`
  position: relative; /* Needed for absolute children */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;

const HeroText = styled.h1`
  @media (max-width: ${breakpoints.small}) {
    font-size: 18vw;
  }

  @media (max-width: ${breakpoints.medium}) {
    font-size: 22vw;
  }

  font-size: 16vw;
  line-height: 0.8;
  letter-spacing: -0.05em;
  text-align: start;
  margin: 10px;
`;

// Different text positions

const PreText = styled.p`
  position: absolute;

  @media (max-width: ${breakpoints.small}) {
    font-size: 3vw;
    left: 25%;
  }

  @media (max-width: ${breakpoints.medium}) {
    font-size: 3vw;
    left: 25%;
  }

  font-size: 1.75vw;
  left: 35%;
  top: 0;
`;

const BioText = styled.p`
  position: absolute;

  @media (max-width: ${breakpoints.small}) {
    font-size: 3vw;
  }

  @media (max-width: ${breakpoints.medium}) {
    font-size: 3vw;
    text-align: start;
    top: undefined;
    left: 10%;
    bottom: -30%;
  }

  @media (min-width: ${breakpoints.large}) {
    right: 10%;
    top: 15%;
    font-size: 1.25vw;
  }
`;

const FooterText = styled.p`
  position: absolute;
  bottom: -25%;
  left: 25%;

  @media (max-width: ${breakpoints.medium}) {
    font-size: 3vw;
    bottom: -80%;
  }

  @media (min-width: ${breakpoints.large}) {
    font-size: 1.25vw;
    left: 30%;
  }
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <TextContainer>
        <PreText>
          <span style={{ color: "#E6F187" }}>[</span> your favourite{" "}
          <span style={{ color: "#E6F187" }}>]</span>
        </PreText>
        <HeroText>
          Creative
          <br />
          Developer<span style={{ color: "#E6F187" }}>.</span>
        </HeroText>
        <BioText>
          <span style={{ color: "#E6F187" }}>*</span> specialist in ux/ui, web
          design, &<br />
          front-end development.
        </BioText>
        <FooterText>[ making the internet prettier since 2019 ]</FooterText>
      </TextContainer>
    </HeroContainer>
  );
};

export default HeroSection;

{
  /* <RightText>
        * specialist in ux/ui, web design, & front-end development.
      </RightText>
      <BottomText>[ making the internet prettier since 2019 ]</BottomText> */
}
