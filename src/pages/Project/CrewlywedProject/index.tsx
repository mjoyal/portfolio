import styled from "@emotion/styled";
import { observer } from "mobx-react";

import Button from "src/components/Button";

import useStores from "src/hooks/useStores";
import { Box, Stack, useMediaQuery, useTheme } from "@mui/material";
import LittleArrow from "src/icons/LittleArrow";
import ProjectSectionText from "../ProjectSectionText";
import Spacer from "src/components/Spacer";

const ProjectPageContainer = styled.div`
  /* These 100% widths are important to keep the overall margin of the site */
  width: 100%;
  min-height: 100vh;
  margin-top: 40px;
  ${({ theme }) => (theme as any).breakpoints.up("md")} {
    padding-left: 60px;
    padding-right: 60px;
  }
`;

const HeaderSection = styled.div`
  margin-top: 48px;
  display: flex;
`;

const StyledHeader = styled.h2`
  text-align: right;
  line-height: 1;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  border-radius: 3px;
`;

const SmallImage = styled.img`
  width: 48%;
  height: 100%;
`;

export const StyledP = styled.p<{ isHidden?: boolean }>`
  max-width: 400px;
  display: ${({ isHidden = false }) => (isHidden ? "none" : "block")};
`;

const StyledTitle = styled.h4`
  max-width: 700px;
`;

const CrewlywedProject = () => {
  const {
    projectStore: { selectedProject },
  } = useStores();

  const theme = useTheme();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <ProjectPageContainer>
      <HeaderSection>
        {!isSmallScreen && (
          <Stack flex={1} justifyContent={"flex-end"}>
            <LittleArrow />
          </Stack>
        )}
        <Stack gap={"32px"} flex={1}>
          <StyledHeader>{selectedProject?.name}</StyledHeader>
          <Image src={"/images/project-square.png"} />
        </Stack>
      </HeaderSection>
      {isSmallScreen ? <Spacer /> : <Spacer level={50} />}
      <Stack alignItems={"flex-start"}>
        <StyledTitle>The Newlywed game for you and your crew</StyledTitle>
        <Spacer />
        <Stack direction={{ sm: "column", lg: "row" }} gap={{ sm: 5, md: 10 }}>
          <StyledP>
            As my coding bootcamp’s final project, I wanted to build something
            that helped people feel connected again. During the pandemic, social
            isolation was everywhere—and I kept wondering how we could bring
            back lightness and play, even from a distance.
          </StyledP>
          <StyledP>
            So I pitched Crewlywed, a real-time, multiplayer web game inspired
            by The Newlywed Game and designed for group play. Players join a
            shared room, answer questions about each other, and try to guess—or
            bluff—their way to the top. It’s fast, funny, and built to turn any
            group chat into a game night.
          </StyledP>
        </Stack>

        <Spacer level={6} />

        <Button href="https://github.com/mjoyal/crewlywed-frontend">
          View Github Repo
        </Button>
      </Stack>

      <Spacer level={10} />

      <Box>
        <h4>My Role</h4>
        <Spacer level={10} />
        <Stack direction={{ xs: "column", md: "row" }} gap={{ xs: 3, md: 10 }}>
          <StyledP>
            Over three years at Fit52, I worked on UI refinement, scalable
            component architecture, and user-facing feature development. I
            focused on improving visual clarity, usability, and long-term
            maintainability. My contributions included refining the user feed
            experience and leading component refactors to streamline development
            workflows.
          </StyledP>
          <StyledP>
            I also built interactive features such as the exercise swap system.
            My role sat at the intersection of design, engineering, and
            product—translating design intent into polished, scalable interfaces
            that balanced aesthetics with functionality.
          </StyledP>
        </Stack>
      </Box>

      <ProjectSectionText number="01" title="project overview">
        maybe i could have a little bit of text here to fill out the space.
        could be a nice little morsel of text about me. little quirky facts. fun
        facts. but also serious facts. very professional serious facts.
      </ProjectSectionText>

      <Image src={"/images/gigpit.png"} />

      <ProjectSectionText number="02" title="goals">
        maybe i could have a little bit of text here to fill out the space.
        could be a nice little morsel of text about me. little quirky facts. fun
        facts. but also serious facts. very professional serious facts.
      </ProjectSectionText>

      <Image src={"/images/gigpit.png"} />

      <ProjectSectionText number="03" title="process">
        maybe i could have a little bit of text here to fill out the space.
        could be a nice little morsel of text about me. little quirky facts. fun
        facts. but also serious facts. very professional serious facts.
      </ProjectSectionText>

      <Stack gap={1}>
        <Stack direction={"row"} gap={1}>
          <SmallImage src={"/images/project-square.png"} />
          <SmallImage src={"/images/project-square.png"} />
        </Stack>

        <Image src={"/images/gigpit.png"} />
      </Stack>

      <ProjectSectionText number="04" title="outcomes" hasButton>
        maybe i could have a little bit of text here to fill out the space.
        could be a nice little morsel of text about me. little quirky facts. fun
        facts. but also serious facts. very professional serious facts.
      </ProjectSectionText>

      <Spacer />
      <Spacer />

      <Image src={"/images/gigpit.png"} />
    </ProjectPageContainer>
  );
};

export default observer(CrewlywedProject);
