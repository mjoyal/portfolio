import { observer } from "mobx-react";

import { Box, Stack, useMediaQuery, useTheme } from "@mui/material";
import {
  HeroSectionWrapper,
  MockWrapper,
  HeroImage,
  ProjectPageContainer,
  SectionDivider,
  SectionTitle,
  StyledP,
  MockImage,
} from "../components";
import useStores from "src/hooks/useStores";
import LinkArrow from "src/icons/LinkArrow";

const Fit52Project = () => {
  const {
    projectStore: { selectedProject },
  } = useStores();

  //  const theme = useTheme();
  // const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <ProjectPageContainer>
      <HeroSectionWrapper>
        <h2>Fit52</h2>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          width={"100%"}
        >
          <Stack direction={"row"} justifyContent={"start"} gap={10}>
            <StyledP>Product Design, Engineering</StyledP>
            <StyledP>2021 - 2024</StyledP>
          </Stack>
          <a
            href={"https://www.fit52.com/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Stack direction={"row"} gap={1} alignItems={"center"}>
              <StyledP>{"fit52.com"}</StyledP>
              <LinkArrow />
            </Stack>
          </a>
        </Stack>

        <HeroImage src={selectedProject?.heroImage} />
      </HeroSectionWrapper>

      <SectionDivider />

      <Stack
        direction={"row"}
        justifyContent={"space-around"}
        marginBottom={10}
      >
        <StyledP>Intro</StyledP>
        <Box>
          <SectionTitle>
            During the pandemic, isolation was widespread
          </SectionTitle>
          <StyledP>
            I was interested in how lightness and play could exist even at a
            distance. I wanted to build something that helped people feel
            playful and connected again.
          </StyledP>
        </Box>
      </Stack>

      <MockWrapper>
        <MockImage
          src={"/images/fit52/swap-screen.webp"}
          alt="Mockup of fit52 exercise swap screen"
        />
        <MockImage
          src={"/images/fit52/carrie-band.webp"}
          alt="Carrie Underwood with Resistance Band"
        />
      </MockWrapper>
      <SectionDivider />

      <Stack
        direction={"row"}
        justifyContent={"space-around"}
        marginBottom={10}
      >
        <StyledP>1. Social Feed Redesign & Implementation</StyledP>
        <Box>
          <SectionTitle>
            During the pandemic, isolation was widespread
          </SectionTitle>
          <StyledP>
            I led the redesign and full implementation of the Fit52 user feed to
            improve clarity, engagement, and information density. The original
            version used oversized elements, uneven spacing, and awkward buttons
            that limited visibility to a single post—discouraging users from
            scrolling or interacting.
          </StyledP>
        </Box>
      </Stack>

      <MockWrapper>
        <MockImage src={"/images/fit52/kettlebell.webp"} alt="Kettlebell" />
        <MockImage
          src={"/images/fit52/swap-screen.webp"}
          alt="Mockup of fit52 exercise swap screen"
        />
      </MockWrapper>
      <SectionDivider />
      <Stack
        direction={"row"}
        justifyContent={"space-around"}
        marginBottom={10}
      >
        <StyledP>1. Social Feed Redesign & Implementation</StyledP>
        <Box>
          <SectionTitle>
            During the pandemic, isolation was widespread
          </SectionTitle>
          <StyledP>
            I led the redesign and full implementation of the Fit52 user feed to
            improve clarity, engagement, and information density. The original
            version used oversized elements, uneven spacing, and awkward buttons
            that limited visibility to a single post—discouraging users from
            scrolling or interacting.
          </StyledP>
        </Box>
      </Stack>
      <MockWrapper>
        <MockImage
          src={"/images/fit52/activity-graph.webp"}
          alt="Activity Graph"
        />
        <MockImage
          src={"/images/fit52/weeks-active.webp"}
          alt="Weeks Active Streak"
        />
      </MockWrapper>
      <SectionDivider />
      <Stack
        direction={"row"}
        justifyContent={"space-around"}
        marginBottom={10}
      >
        <StyledP>Reflections</StyledP>
        <Box>
          <SectionTitle>
            During the pandemic, isolation was widespread
          </SectionTitle>
          <StyledP>
            I led the redesign and full implementation of the Fit52 user feed to
            improve clarity, engagement, and information density. The original
            version used oversized elements, uneven spacing, and awkward buttons
            that limited visibility to a single post—discouraging users from
            scrolling or interacting.
          </StyledP>
        </Box>
      </Stack>
      <SectionDivider />
    </ProjectPageContainer>
  );
};

export default observer(Fit52Project);
