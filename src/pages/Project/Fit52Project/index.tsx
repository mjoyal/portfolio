import styled from "@emotion/styled";
import { observer } from "mobx-react";

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
import Fit52Logo from "src/icons/Fit52Logo";

const PageTitle = styled.h1`
  max-width: 700px;
  margin-bottom: 20px;
`;

const Fit52Project = () => {
  return (
    <ProjectPageContainer>
      <Stack>
        <Stack flex={1}>
          <Fit52Logo />
          <ProjectImage src={"/images/project-square.png"} />
        </Stack>
      </Stack>
      <SectionDivider />

      <Stack alignItems={"flex-start"}>
        <PageTitle>
          Holistic fitness platform inspired by Carrie Underwood’s wellness
          philosophy
        </PageTitle>
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
        <SectionTitle>My Role</SectionTitle>
        <BodyTextWrapper>
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
        </BodyTextWrapper>
      </Box>
      <SectionDivider />
      <Box>
        <SectionTitle>Social Feed Redesign & Implementation</SectionTitle>
        <BodyTextWrapper>
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
        </BodyTextWrapper>
      </Box>
      <Spacer level={20} />
      <MockWrapper>
        <PhoneMockImage src={"/images/fit52/feed-before.png"} />
        <PhoneMockImage src={"/images/fit52/feed-after.png"} />
      </MockWrapper>
      <Spacer level={20} />
      <MockWrapper>
        <PhoneMockImage src={"/images/fit52/comments-before.png"} />
        <PhoneMockImage src={"/images/fit52/comments-after.png"} />
      </MockWrapper>

      <SectionDivider />
      <Box>
        <SectionTitle>TopBar API Refactor</SectionTitle>
        <BodyTextWrapper>
          <Stack gap={{ xs: 3, md: 5 }}>
            <StyledP>
              One of my most impactful technical contributions was refactoring
              the TopBar component, which had become hard to maintain due to
              excessive configuration props.
            </StyledP>
            <StyledP>
              To solve this, I broke the component into clear subcomponents—like
              Logo, BackButton, and CloseButton—and introduced a more composable
              API using leftComponent, middleComponent, and rightComponent
              props.
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
              The refactor also fixed several visual inconsistencies—like
              incorrect icon sizes, misaligned elements, and mismatched colors.
              Overall, the component became easier to implement, easier to
              debug, and far less prone to regressions.
            </StyledP>
          </Stack>
        </BodyTextWrapper>
      </Box>
      <SectionDivider />

      <Box>
        <SectionTitle>Building the Exercise Swap System</SectionTitle>
        <BodyTextWrapper>
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
        </BodyTextWrapper>
      </Box>

      <Spacer level={20} />
      <MockWrapper>
        <PhoneMockImage src={"/images/fit52/exercise-swap.png"} />
        <PhoneMockImage src={"/images/fit52/exercise-suggestions.png"} />
      </MockWrapper>

      <SectionDivider />

      <Box>
        <SectionTitle>Learnings</SectionTitle>
        <BodyTextWrapper>
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
        </BodyTextWrapper>
      </Box>
    </ProjectPageContainer>
  );
};

export default observer(Fit52Project);
