import styled from "@emotion/styled";
import { Box } from "@mui/material";
import PreText from "./components/PreText";

const HeroContainer = styled.div`
  position: relative; /* Allows absolute positioning for child elements */
  width: 100%;
  height: 90vh;
  background-color: ${({ theme }) => (theme as any).palette.background.primary};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextContainer = styled.div`
  position: relative; /* Needed for absolute children */
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 80px;
`;

const HeroText = styled.div`
  font-weight: 500;
  // font-size: clamp(5.5rem, 18vw, 12rem);
  font-size: 5.75rem;
  letter-spacing: -0.05em;
  line-height: 1;
  text-align: start;
  background-color: ${({ theme }) => (theme as any).palette.background.primary};

  ${({ theme }) => (theme as any).breakpoints.up("md")} {
    margin-top: 25px;
  }

  ${({ theme }) => (theme as any).breakpoints.up("lg")} {
    margin-top: 20px;
  }
`;

const BioText = styled.div`
  position: absolute;
  display: flex;

  text-align: left;
  width: fit-content;

  gap: 4px;
  font-size: 1.25rem;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);

  ${({ theme }) => (theme as any).breakpoints.up("md")} {
    top: 15%;
    right: 0;
  }

  ${({ theme }) => (theme as any).breakpoints.up("lg")} {
    top: 15%;
    right: 5%;
  }
`;

const FooterText = styled.p`
  position: absolute;
  bottom: 5%;
  font-size: 1.15rem;

  ${({ theme }) => (theme as any).breakpoints.up("md")} {
    left: 25%;
  }
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
        <span>
          <BioText>
            <Box
              component="span"
              color="text.secondary"
              sx={{ marginTop: "4px" }}
            >
              *
            </Box>{" "}
            <p>
              specialist in ux/ui, web design, & <br /> front-end development.
            </p>
          </BioText>
        </span>
      </TextContainer>
      <FooterText>[ making the internet prettier since 2019 ]</FooterText>
    </HeroContainer>
  );
};

export default HeroSection;
