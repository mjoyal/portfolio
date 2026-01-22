import { observer } from "mobx-react";

import { Box, Stack } from "@mui/material";
import {
  HeroSectionWrapper,
  HeroImage,
  ProjectPageContainer,
  SectionDivider,
  SectionTitle,
  StyledP,
  MockImage,
  MockWrapper,
} from "../components";
import useStores from "src/hooks/useStores";

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
        <HeroImage src={selectedProject?.heroImage} />
      </HeroSectionWrapper>

      <SectionDivider />
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent={"space-between"}
        marginBottom={10}
        marginX={{ xs: 5, md: 10 }}
      >
        <StyledP>(INTRO)</StyledP>
        <Box>
          <SectionTitle>
            During the pandemic, isolation was widespread
          </SectionTitle>
          <StyledP>
            I became interested in how play could recreate a sense of connection
            from afar. Crewlywed is a real-time multiplayer web game inspired by
            The Newlywed Game, built for shared rooms where players get to know
            each other by guessing, bluffing, and competing their way to the
            top.
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
        direction={{ xs: "column", md: "row" }}
        justifyContent={"space-between"}
        marginBottom={10}
        marginX={{ xs: 5, md: 10 }}
      >
        <StyledP>(DESIGNING FOR PLAY)</StyledP>
        <Box>
          <SectionTitle>
            The UI was designed to be light, funny, and social.
          </SectionTitle>
          <StyledP>
            The design blends clear structure with playful visuals to support
            both engaging gameplay and connection. Every screen was built to
            feel intuitive at a glance, so players could focus on laughing,
            bluffing, and reacting—not figuring out how to play.
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
        direction={{ xs: "column", md: "row" }}
        justifyContent={"space-between"}
        marginBottom={10}
        marginX={{ xs: 5, md: 10 }}
      >
        <StyledP>(GAME MECHANICS)</StyledP>
        <Box>
          <StyledP>
            We started by designing the game mechanics from the ground
            up—defining rounds, scoring, and host permissions—which supported
            clearer decisions, cleaner code, and confident collaboration.
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
        direction={{ xs: "column", md: "row" }}
        justifyContent={"space-between"}
        marginBottom={10}
        marginX={{ xs: 5, md: 10 }}
      >
        <StyledP>(RESULTS)</StyledP>
        <Box>
          <StyledP>
            We successfully built a Jackbox-style game that helped people feel
            more connected during a time of global isolation. This project was a
            milestone in designing and building a fully functional, real-time
            web app—deepening my skills in front-end architecture, state
            management, and WebSockets.
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
        direction={{ xs: "column", md: "row" }}
        justifyContent={"space-between"}
        marginBottom={10}
        marginX={{ xs: 5, md: 10 }}
      >
        <StyledP>(REFLECTIONS)</StyledP>
        <StyledP>
          Building Crewlywed reinforced the importance of scalable state
          architecture, even in small, fast-moving projects. As the app grew,
          centralized patterns became essential for managing complexity and
          supporting real-time collaboration.
        </StyledP>
      </Stack>
    </ProjectPageContainer>
  );
};

export default observer(CrewlywedProject);
