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
        </Stack>
      </Box>

      <Image src={"/images/gigpit.png"} />

      <Box>
        <h4>Designing Game Mechanics </h4>
        <Spacer level={10} />
        <Stack direction={{ xs: "column", md: "row" }} gap={{ xs: 3, md: 10 }}>
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
        </Stack>
      </Box>

      <Box>
        <h4>Interaction Design</h4>
        <Spacer level={10} />
        <StyledP>
          To keep the experience intuitive and playful, I designed
          microinteractions and motion-based feedback across the game flow. From
          joining a room to submitting a bluff, every moment was crafted to feel
          light, responsive, and fun—supporting the social energy of the game.
        </StyledP>
      </Box>

      <Image src={"/images/gigpit.png"} />

      <Box>
        <h4>Outcome & Results</h4>
        <Spacer level={10} />
        <Stack direction={{ xs: "column", md: "row" }} gap={{ xs: 3, md: 10 }}>
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
        </Stack>
      </Box>

      <Stack gap={1}>
        <Stack direction={"row"} gap={1}>
          <SmallImage src={"/images/project-square.png"} />
          <SmallImage src={"/images/project-square.png"} />
        </Stack>

        <Image src={"/images/gigpit.png"} />
      </Stack>

      <Box>
        <h4>Learnings</h4>
        <Spacer level={10} />
        <Stack direction={{ xs: "column", md: "row" }} gap={{ xs: 3, md: 10 }}>
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
        </Stack>
      </Box>
      <Image src={"/images/gigpit.png"} />
    </ProjectPageContainer>
  );
};

export default observer(CrewlywedProject);
