import styled from "@emotion/styled";

import { observer } from "mobx-react";

import { Box, Stack } from "@mui/material";
import Spacer from "src/components/Spacer";
import {
  BodyTextWrapper,
  HeroSectionWrapper,
  ProjectImage,
  ProjectPageContainer,
  SectionDivider,
  SectionTitle,
  StyledP,
  MockImage,
} from "../components";
import useStores from "src/hooks/useStores";

const ProjectDescription = styled.p`
  font-size: 1.75rem;
  text-align: left;
`;

const MockWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 1rem;
`;

const CrewlywedProject = () => {
  const {
    projectStore: { selectedProject },
  } = useStores();

  return (
    <ProjectPageContainer>
      <HeroSectionWrapper>
        <h2>Crewlywed</h2>
        <Stack direction={"row"}>
          <StyledP>Product Design, Design System, Engineering</StyledP>
          <StyledP>2024 - Present</StyledP>
        </Stack>
        <ProjectImage src={selectedProject?.imageSource} />
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
          src={"/images/crewlywed/start.webp"}
          alt="Image of project start screen"
        />
        <MockImage
          src={"/images/crewlywed/lobby.webp"}
          alt="Image of project lobby"
        />
      </MockWrapper>
      <SectionDivider />

      <Stack
        direction={"row"}
        justifyContent={"space-around"}
        marginBottom={10}
      >
        <StyledP>1. Designing for play</StyledP>
        <Box>
          <SectionTitle>
            We wanted the app to feel playful and fun.
          </SectionTitle>
          <StyledP>
            The UI was designed to keep this flow light, funny, and
            social—blending clear structure with playful visuals to support both
            engaging gameplay and connection. Every screen was built to feel
            intuitive at a glance, so players could focus on laughing, bluffing,
            and reacting—not figuring out how to play.
          </StyledP>
        </Box>
      </Stack>

      <MockWrapper>
        <MockImage
          src={"/images/crewlywed/question-1.webp"}
          alt="Image of project start screen"
        />
        <MockImage
          src={"/images/crewlywed/input.webp"}
          alt="Image of project lobby"
        />
      </MockWrapper>
      <SectionDivider />
      <Stack
        direction={"row"}
        justifyContent={"space-around"}
        marginBottom={10}
      >
        <StyledP>2. Building game mechanics</StyledP>
        <Box>
          <SectionTitle>
            We wanted the app to feel playful and fun.
          </SectionTitle>
          <StyledP>
            The UI was designed to keep this flow light, funny, and
            social—blending clear structure with playful visuals to support both
            engaging gameplay and connection. Every screen was built to feel
            intuitive at a glance, so players could focus on laughing, bluffing,
            and reacting—not figuring out how to play.
          </StyledP>
        </Box>
      </Stack>

      <MockWrapper>
        <MockImage
          src={"/images/crewlywed/question-2.webp"}
          alt="Image of project start screen"
        />
        <MockImage
          src={"/images/crewlywed/submit.webp"}
          alt="Image of project lobby"
        />
      </MockWrapper>
      <SectionDivider />
      <Stack
        direction={"row"}
        justifyContent={"space-around"}
        marginBottom={10}
      >
        <StyledP>3. Impact</StyledP>
        <Box>
          <SectionTitle>
            We wanted the app to feel playful and fun.
          </SectionTitle>
          <StyledP>
            The UI was designed to keep this flow light, funny, and
            social—blending clear structure with playful visuals to support both
            engaging gameplay and connection. Every screen was built to feel
            intuitive at a glance, so players could focus on laughing, bluffing,
            and reacting—not figuring out how to play.
          </StyledP>
        </Box>
      </Stack>
      <MockWrapper>
        <MockImage
          src={"/images/crewlywed/results.webp"}
          alt="Image of project start screen"
        />
        <MockImage
          src={"/images/crewlywed/final.webp"}
          alt="Image of project lobby"
        />
      </MockWrapper>
      <SectionDivider />
      <Stack
        direction={"row"}
        justifyContent={"space-around"}
        marginBottom={10}
      >
        <StyledP>4. Impact</StyledP>
        <Box>
          <SectionTitle>
            We wanted the app to feel playful and fun.
          </SectionTitle>
          <StyledP>
            The UI was designed to keep this flow light, funny, and
            social—blending clear structure with playful visuals to support both
            engaging gameplay and connection. Every screen was built to feel
            intuitive at a glance, so players could focus on laughing, bluffing,
            and reacting—not figuring out how to play.
          </StyledP>
        </Box>
      </Stack>
    </ProjectPageContainer>
  );
};

export default observer(CrewlywedProject);
