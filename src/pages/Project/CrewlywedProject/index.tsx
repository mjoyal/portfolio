import styled from "@emotion/styled";

import { observer } from "mobx-react";

import { Box, Stack } from "@mui/material";
import Spacer from "src/components/Spacer";
import {
  BodyTextWrapper,
  HeroSectionWrapper,
  MockWrapper,
  PhoneMock,
  ProjectImage,
  ProjectPageContainer,
  SectionDivider,
  SectionTitle,
  StyledP,
} from "../components";
import CrewlywedLogo from "src/icons/CrewlywedLogo";
import useStores from "src/hooks/useStores";
import ProjectOverview from "../components/ProjectOverview";

const BirdImage = styled.img`
  width: 300px;
  height: 100%;
`;

const CrewlywedProject = () => {
  const {
    projectStore: { selectedProject },
  } = useStores();

  return (
    <ProjectPageContainer>
      <HeroSectionWrapper>
        <CrewlywedLogo />
        <ProjectImage src={selectedProject?.imageSource} />
      </HeroSectionWrapper>
      <ProjectOverview
        project="Crewlywed"
        title="The Newlywed game for you and your crew"
        paragraphs={[
          "As my coding bootcamp’s final project, I wanted to build something that helped people feel connected again. During the pandemic, social isolation was everywhere—and I kept wondering how we could bring back lightness and play, even from a distance.",
          "So I pitched Crewlywed, a real-time, multiplayer web game inspired by The Newlywed Game and designed for group play. Players join a shared room, answer questions about each other, and try to guess—or bluff—their way to the top.",
        ]}
        collaborators="Chantal Snazel, Will Portman"
        url="Github Repo"
        date="2020"
      />
      <SectionDivider />
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box>
          <SectionTitle>My Role</SectionTitle>
          <BodyTextWrapper>
            <StyledP>
              I co-led the design and front-end development of Crewlywed,
              collaborating on the game’s branding, character illustrations, and
              UI components to create a playful, engaging experience. My focus
              was on interaction design, animations, and implementing the
              interface using React.
            </StyledP>
            <StyledP>
              I also researched and led the implementation of WebSocket
              functionality—designing the real-time architecture and handling
              state synchronization between players, the game host, and the
              server.
            </StyledP>
          </BodyTextWrapper>
        </Box>
        <BirdImage src="/images/crewlywed/bird.png" />
      </Stack>
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
      <Spacer level={20} />
      <MockWrapper>
        <PhoneMock
          src={"/images/crewlywed/question-screen.png"}
          label="Players are shown this round’s question"
        />
        <PhoneMock
          src={"/images/crewlywed/response-screen.png"}
          label="Players submit a fake answer to fool their friends"
        />
      </MockWrapper>
      <SectionDivider />
      <Box>
        <SectionTitle>Building with Game Mechanics</SectionTitle>

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
      <Spacer level={20} />
      <MockWrapper>
        <PhoneMock
          src={"/images/crewlywed/choice-screen.png"}
          label="Players guess which response is Will’s real answer"
        />
        <PhoneMock
          src={"/images/crewlywed/results-screen.png"}
          label="The correct answer and scores are revealed for the round"
        />
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
      <Spacer level={20} />
      <MockWrapper>
        <PhoneMock
          src={"/images/crewlywed/final-screen.png"}
          label="The game ends with a final score screen and winner announcement"
        />
      </MockWrapper>
      <SectionDivider />
      <Box>
        <SectionTitle>Learnings</SectionTitle>

        <BodyTextWrapper>
          <StyledP>
            Building Crewlywed showed me the importance of scalable
            architecture—even in small, fast-moving projects. We relied on prop
            drilling for state, simply because more advanced state management
            (like Context, Redux, or MobX) hadn’t been taught in the bootcamp.
          </StyledP>
          <StyledP>
            However, as the app grew, managing state became difficult, and I
            began to see how centralized patterns could simplify complexity and
            support real-time collaboration more effectively.
          </StyledP>
        </BodyTextWrapper>
      </Box>
    </ProjectPageContainer>
  );
};

export default observer(CrewlywedProject);
