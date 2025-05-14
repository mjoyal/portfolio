import { observer } from "mobx-react";
import styled from "@emotion/styled";

import Button from "src/components/Button";

import { Box, Stack } from "@mui/material";
import Spacer from "src/components/Spacer";
import {
  BodyTextWrapper,
  MockWrapper,
  PhoneMockImage,
  ProjectImage,
  ProjectPageContainer,
  SectionDivider,
  SectionTitle,
  StyledP,
} from "../components";
import CrewlywedLogo from "src/icons/CrewlywedLogo";

const PageTitle = styled.h1`
  max-width: 600px;
  margin-bottom: 20px;
`;

const CrewlywedProject = () => {
  return (
    <ProjectPageContainer>
      <Stack>
        <Stack gap={"32px"} flex={1}>
          <CrewlywedLogo />
          <ProjectImage src={"/images/project-square.png"} />
        </Stack>
      </Stack>

      <SectionDivider />

      <Stack alignItems={"flex-start"}>
        <PageTitle>The Newlywed game for you and your crew</PageTitle>
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

      <SectionDivider />

      <Box>
        <SectionTitle>My Role</SectionTitle>
        <BodyTextWrapper>
          <StyledP>
            I co-led the design and front-end development of Crewlywed,
            collaborating on the game’s branding, character illustrations, and
            UI components to create a playful, engaging experience. My focus was
            on interaction design, animations, and implementing the interface
            using React.
          </StyledP>
          <StyledP>
            I also researched and led the implementation of WebSocket
            functionality—designing the real-time architecture and handling
            state synchronization between players, the game host, and the
            server.
          </StyledP>
        </BodyTextWrapper>
      </Box>
      <SectionDivider />
      <Box>
        <SectionTitle>Designing for Play </SectionTitle>

        <BodyTextWrapper>
          <StyledP>
            The UI was designed to keep this flow light, funny, and
            social—blending clear structure with playful visuals to support both
            competition and connection. Every screen was built to feel intuitive
            at a glance, so players could focus on laughing, bluffing, and
            reacting—not figuring out how to play.
          </StyledP>
          <StyledP>
            Characters are quirky but expressive, prompts are casual and weird
            in the best way, and microinteractions were kept minimal to avoid
            distraction. The result is a game that feels just as fun to lose as
            it does to win.
          </StyledP>
        </BodyTextWrapper>
      </Box>

      <SectionDivider />

      <MockWrapper>
        <PhoneMockImage src={"/images/crewlywed/question-screen.png"} />
        <PhoneMockImage src={"/images/crewlywed/response-screen.png"} />
      </MockWrapper>

      <SectionDivider />
      <Box>
        <SectionTitle>Designing Game Mechanics </SectionTitle>

        <BodyTextWrapper>
          <StyledP>
            I co-designed the game mechanics from the ground up—structuring how
            rounds worked, how scoring was calculated, and how host permissions
            shaped the flow of play. I also mapped out the game state and event
            flow using WebSockets to ensure the experience felt seamless from
            one phase to the next.
          </StyledP>
          <StyledP>
            This shared understanding of the full game flow made it easier to
            make decisions, write cleaner, more focused code, and move forward
            confidently as a team.
          </StyledP>
        </BodyTextWrapper>
      </Box>

      <SectionDivider />

      <MockWrapper>
        <PhoneMockImage src={"/images/crewlywed/choice-screen.png"} />
        <PhoneMockImage src={"/images/crewlywed/results-screen.png"} />
      </MockWrapper>

      <SectionDivider />

      <Box>
        <SectionTitle>Outcome & results</SectionTitle>
        <BodyTextWrapper>
          <StyledP>
            Crewlywed was ranked in the top three final projects of the
            bootcamp, recognized for its real-time multiplayer functionality and
            engaging user experience. We successfully built a Jackbox-style game
            that helped people feel more connected during a time of global
            isolation.
          </StyledP>
          <StyledP>
            This project was a milestone in designing and building a fully
            functional, real-time web app—deepening my skills in front-end
            architecture, state management, and WebSockets.
          </StyledP>
        </BodyTextWrapper>
      </Box>

      <SectionDivider />

      <MockWrapper>
        <PhoneMockImage src={"/images/crewlywed/final-screen.png"} />
      </MockWrapper>

      <SectionDivider />
      <Box>
        <SectionTitle>Learnings</SectionTitle>

        <BodyTextWrapper>
          <StyledP>
            Building Crewlywed showed me the importance of scalable
            architecture—even in small, fast-moving projects. We initially
            relied on prop drilling for state, simply because more advanced
            state management (like Context, Redux, or MobX) hadn’t been taught
            in the bootcamp.
          </StyledP>
          <StyledP>
            As the app grew, managing state became difficult, and I began to see
            how centralized patterns could simplify complexity and support
            real-time collaboration more effectively.
          </StyledP>
        </BodyTextWrapper>
      </Box>
    </ProjectPageContainer>
  );
};

export default observer(CrewlywedProject);
