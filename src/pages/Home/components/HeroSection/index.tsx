import styled from "@emotion/styled";
import { Box, Stack } from "@mui/material";
import PreText from "./components/PreText";

const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 60vh;
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
  font-size: clamp(5.5rem, 18vw, 13rem);
  letter-spacing: -0.05em;
  line-height: 1;
  text-align: left;
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
          bottom: 45,
        }}
        gap={{ xs: 5, md: 10 }}
        paddingRight={{ xs: "0px", sm: "30px" }}
        direction={"row"}
        justifyContent={{ xs: "center", md: "flex-end" }}
        alignItems={"flex-end"}
      >
        {/* {isMedium && (
          <button onClick={() => scrollToAnchor("bio")}>
            <LittleArrow />
          </button>
        )} */}
      </Stack>
    </HeroContainer>
  );
};

export default HeroSection;
