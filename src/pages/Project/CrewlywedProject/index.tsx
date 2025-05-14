import styled from "@emotion/styled";
import { observer } from "mobx-react";

import Button from "src/components/Button";

import useStores from "src/hooks/useStores";
import { Box, Stack, useMediaQuery, useTheme } from "@mui/material";
import LittleArrow from "src/icons/LittleArrow";
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

const HeaderSection = styled.div`
  margin-top: 48px;
  display: flex;
`;

const StyledHeader = styled.h2`
  text-align: right;
  line-height: 1;
`;

const StyledTitle = styled.h3`
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
          <ProjectImage src={"/images/project-square.png"} />
        </Stack>
      </HeaderSection>

      <SectionDivider />

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

      <Stack direction={{ xs: "column", md: "row" }} gap={8}>
        <PhoneMockImage src={"/images/crewlywed/choice-screen.png"} />
        <PhoneMockImage src={"/images/crewlywed/results-screen.png"} />
      </Stack>

      <SectionDivider />

      <Box>
        <SectionTitle>Outcome & Results</SectionTitle>
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
      <SectionDivider />
    </ProjectPageContainer>
  );
};

export default observer(CrewlywedProject);
