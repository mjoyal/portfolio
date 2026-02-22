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
      <Stack gap={2} alignItems={"flex-start"}>
        <h2>Fit52</h2>
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent={"space-between"}
          width={"100%"}
        >
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent={"start"}
            gap={{ md: 10 }}
          >
            <StyledP>Product Design, Engineering</StyledP>
            <StyledP>2021 - 2024</StyledP>
          </Stack>
          <a
            href={
              "https://apps.apple.com/us/app/fit52-with-carrie-underwood/id1475006543"
            }
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
      </Stack>

      <SectionDivider />

      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent={"space-between"}
        marginBottom={10}
        marginX={{ xs: 5, md: 10 }}
        gap={{ xs: 1 }}
      >
        <StyledP>(INTRO)</StyledP>
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
          src={"/images/fit52/social-feed.png"}
          alt="Mockup of fit52 exercise swap screen"
        />
        <MockImage
          src={"/images/fit52/carrie-band.webp"}
          alt="Carrie Underwood with Resistance Band"
        />
      </MockWrapper>
      <SectionDivider />

      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent={"space-between"}
        marginBottom={10}
        marginX={{ xs: 5, md: 10 }}
        gap={{ xs: 1 }}
      >
        <StyledP>(SOCIAL FEED REDESIGN)</StyledP>
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
          src={"/images/fit52/swap-screen.png"}
          alt="Mockup of fit52 exercise swap screen"
        />
      </MockWrapper>
      <SectionDivider />
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent={"space-between"}
        marginBottom={10}
        marginX={{ xs: 5, md: 10 }}
        gap={{ xs: 1 }}
      >
        <StyledP>(LOOKING FORWARD)</StyledP>
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
        direction={{ xs: "column", md: "row" }}
        justifyContent={"space-between"}
        marginBottom={10}
        marginX={{ xs: 5, md: 10 }}
        gap={{ xs: 1 }}
      >
        <StyledP>(REFLECTIONS)</StyledP>
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
    </ProjectPageContainer>
  );
};

export default observer(Fit52Project);
