import styled from "@emotion/styled";
import { observer } from "mobx-react";

import Button from "src/components/Button";

import { Box, Stack, useMediaQuery, useTheme } from "@mui/material";
import LittleArrow from "src/icons/LittleArrow";
import Spacer from "src/components/Spacer";

const ProjectPageContainer = styled(Box)`
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

const SectionDivider = styled.div`
  height: 200px;
`;

export const StyledP = styled.p<{ isHidden?: boolean }>`
  max-width: 400px;
  display: ${({ isHidden = false }) => (isHidden ? "none" : "block")};
`;

const StyledTitle = styled.h4`
  max-width: 30ch;
`;

const Fit52Project = () => {
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
        <Stack flex={1}>
          <StyledHeader>Fit52</StyledHeader>
          <Image src={"/images/project-square.png"} />
        </Stack>
      </HeaderSection>
      {isSmallScreen ? <Spacer /> : <Spacer level={50} />}

      <Stack alignItems={"flex-start"}>
        <StyledTitle>
          A holistic fitness platform inspired by Carrie Underwood’s wellness
          philosophy
        </StyledTitle>
        <Spacer />
        <StyledP>
          Built around a 52-card metaphor, fit52 generates dynamic, personalized
          workouts that adapt to each user’s fitness level and goals. The app
          also integrates nutrition guidance and community-driven features to
          support long-term health and motivation.
        </StyledP>
        <Spacer level={6} />

        <Button href="https://www.fit52.com/">View Project</Button>
        <SectionDivider />
      </Stack>

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

      <Image src={"/images/fit52-feed.png"} />
      <Spacer level={20} />
      <Box>
        <h4>User Feed Redesign & Implementation</h4>
        <Spacer level={10} />
        <Stack direction={{ xs: "column", md: "row" }} gap={{ xs: 3, md: 10 }}>
          <Stack gap={{ xs: 3, md: 5 }}>
            <StyledP>
              I led the redesign and full implementation of the Fit52 user feed
              to improve clarity, engagement, and information density. The
              original version used oversized elements, uneven spacing, and
              awkward buttons that limited visibility to a single
              post—discouraging users from scrolling or interacting.
            </StyledP>
            <StyledP>
              I modernized the layout by reducing visual bulk, tightening the
              spacing, and reworking interaction patterns to feel more intuitive
              on mobile. The result was a cleaner, more inviting experience that
              encouraged ongoing engagement.
            </StyledP>
          </Stack>
          <Stack gap={{ xs: 3, md: 5 }}>
            <StyledP>
              As part of the update, I removed redundant elements such as the
              “View All Comments” button and integrated that functionality
              directly into the comment icon. This streamlined the interface and
              reinforced more intuitive user behavior.
            </StyledP>
            <StyledP>
              After launch, feedback from both users and team members was
              immediate and overwhelmingly positive. Many described the feed as
              “cleaner,” “easier to read,” and “more fun to scroll.”
            </StyledP>
          </Stack>
        </Stack>
      </Box>
      <Spacer level={20} />
      <Box>
        <h4>TopBar API Refactor</h4>
        <Spacer level={10} />
        <Stack direction={{ xs: "column", md: "row" }} gap={{ xs: 3, md: 10 }}>
          <Stack gap={{ xs: 3, md: 5 }}>
            <StyledP>
              One of my most impactful technical contributions was refactoring
              the TopBar component, which had become hard to maintain due to
              excessive configuration props (rightComponentColor,
              skipButtonIsDisabled, etc.).
            </StyledP>
            <StyledP>
              To address this, I broke the component into clear subcomponents
              (such as Logo, BackButton, and CloseButton) and introduced a more
              composable API using leftComponent, middleComponent, and
              rightComponent props.
            </StyledP>
          </Stack>
          <Stack gap={{ xs: 3, md: 5 }}>
            <StyledP>
              This shifted the pattern from prop-based configuration to direct
              component injection—reducing prop bloat, improving readability,
              and making it far easier for developers to compose flexible
              layouts without cluttering the codebase.
            </StyledP>
            <StyledP>
              The refactor not only cleaned up the codebase, but also fixed
              several visual bugs and inconsistencies—such as incorrect icon
              sizes, misaligned elements, and mismatched colors. After the
              change, the component was easier to implement, easier to debug,
              and far less prone to introducing regressions.
            </StyledP>
          </Stack>
        </Stack>
      </Box>
      <Spacer level={20} />
      <Box>
        <h4>Building the Exercise Swap System</h4>
        <Spacer level={10} />
        <Stack direction={{ xs: "column", md: "row" }} gap={{ xs: 3, md: 10 }}>
          <Stack gap={{ xs: 3, md: 5 }}>
            <StyledP>
              I implemented a multi-step UI flow that let users swap exercises
              within dynamically generated workouts. The system included
              carousels, filtering logic, swap validation, and dynamic state
              handling to ensure replacements stayed within workout constraints.
            </StyledP>
            <StyledP>
              I focused on maintaining state persistence and delivering clear,
              responsive UI feedback to make the experience feel seamless and
              empowering.
            </StyledP>
          </Stack>
          <Stack gap={{ xs: 3, md: 5 }}>
            <StyledP>
              Before this feature, users could only reroll exercises at random
              if they didn’t like a move. With the new system, they could
              browse, search, and filter to find moves that matched their goals
              and needs—giving them real control.
            </StyledP>
            <StyledP>
              Adoption was immediate and widespread—users embraced the added
              control, and it became a core part of the workout experience.
            </StyledP>
          </Stack>
        </Stack>
      </Box>
      <Spacer level={20} />
      <Box>
        <h4>Learnings</h4>
        <Spacer level={10} />
        <Stack direction={{ xs: "column", md: "row" }} gap={{ xs: 3, md: 10 }}>
          <Stack gap={{ xs: 3, md: 5 }}>
            <StyledP>
              Working on Fit52 over several years taught me how much impact
              thoughtful structure can have—not just on users, but on the
              developers building the product.
            </StyledP>
            <StyledP>
              Refactoring components like the TopBar showed how simplifying
              architecture can prevent bugs, improve consistency, and make
              implementation faster across a growing codebase.
            </StyledP>
          </Stack>
          <Stack gap={{ xs: 3, md: 5 }}>
            <StyledP>
              This was also where I first learned MobX and began understanding
              state management at scale. It gave me a foundational perspective
              on how architectural choices shape long-term maintainability and
              team efficiency.
            </StyledP>
            <StyledP>
              Lastly, building the exercise swap system reminded me how powerful
              it is to give users real control. That feature reinforced a
              product principle I carry with me: good UX means giving people the
              ability to shape their own experience.
            </StyledP>
          </Stack>
        </Stack>
      </Box>
      <Spacer level={20} />
    </ProjectPageContainer>
  );
};

export default observer(Fit52Project);
