import styled from "@emotion/styled";
import { observer } from "mobx-react";

import Button from "src/components/Button";

import { Stack, useMediaQuery, useTheme } from "@mui/material";
import LittleArrow from "src/icons/LittleArrow";
import ProjectSectionText from "../ProjectSectionText";

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

const Spacer = styled.div`
  height: 24px;
`;

const SectionDivider = styled.div`
  height: 200px;
`;

const StyledP = styled.h6`
  max-width: 50ch;
`;

const StyledTitle = styled.h4`
  max-width: 30ch;
`;

const ProjectPage = () => {
  const theme = useTheme();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <HeaderSection>
        {!isSmallScreen && (
          <Stack flex={1} justifyContent={"flex-end"}>
            <LittleArrow />
          </Stack>
        )}
        <Stack gap={"32px"} flex={1}>
          <StyledHeader>fit52</StyledHeader>
          <Image src={"/images/project-square.png"} />
        </Stack>
      </HeaderSection>
      {isSmallScreen ? <Spacer /> : <SectionDivider />}

      <Stack alignItems={"flex-start"}>
        <StyledTitle>
          a holistic fitness platform inspired by Carrie Underwood’s wellness
          philosophy
        </StyledTitle>
        <Spacer />
        <StyledP>
          Built around a 52-card metaphor, fit52 generates dynamic, personalized
          workouts that adapt to each user’s fitness level and goals. The app
          also integrates nutrition guidance and community-driven features to
          support long-term health and motivation.
        </StyledP>
        <Spacer />
        <Spacer />
        <Button
          onClick={() => {
            alert("Not implemented");
          }}
        >
          <Stack direction={"row"} columnGap={2} alignItems={"center"}>
            <h5> View Project</h5>
            {/* <OpenNewArrow /> */}
          </Stack>
        </Button>
        <SectionDivider />
      </Stack>

      <ProjectSectionText number="01" title="my role">
        Over three years at Fit52, I worked across UI refinement, scalable
        component architecture, and user-facing feature development. I focused
        on improving visual clarity, usability, and long-term
        maintainability—refining UX/UI in the user feed, leading component
        refactors to simplify development workflows, and building interactive
        features like the exercise swap system. My work sat at the intersection
        of design, engineering, and product, translating design intent into
        polished, scalable interfaces.
      </ProjectSectionText>

      <Spacer />
      <Spacer />

      <Image src={"/images/fit52-feed.png"} />
      <SectionDivider />

      <ProjectSectionText number="02" title="key contributions">
        <strong>User Feed Redesign & Implementation</strong> <br />
        I led the redesign and full implementation of the Fit52 user feed to
        improve clarity, engagement, and information density. The previous
        version featured oversized elements, uneven spacing, and clunky buttons
        that made it hard to see more than one post at a time—discouraging users
        from scrolling or interacting. I modernized the layout by reducing
        visual bulk, tightening spacing, and reworking interaction patterns to
        feel more intuitive on mobile.
        <br />
        <br />
        As part of the update, I removed redundant elements like the “View All
        Comments” button and folded that functionality directly into the comment
        icon—streamlining the UI and reinforcing intuitive behavior. After
        launch, the feedback from users and team members was immediate and
        overwhelmingly positive, with many calling the feed “cleaner,” “easier
        to read,” and “more fun to scroll.”
        <br />
        <br />
        <strong>TopBar API Refactor</strong> <br />
        One of my most impactful technical contributions was refactoring the
        TopBar component, which had become hard to maintain due to excessive
        configuration props (`rightComponentColor`, `skipButtonIsDisabled`,
        etc.). To address this, I broke the component into clear subcomponents
        (such as `Logo`, `BackButton`, and `CloseButton`) and introduced a more
        composable API using `leftComponent`, `middleComponent`, and
        `rightComponent` props. This shifted the pattern from prop-based
        configuration to direct component injection—reducing prop bloat,
        improving readability, and making it far easier for developers to
        compose flexible layouts without cluttering the codebase. <br />
        <br />
        The refactor not only cleaned up the codebase, but also fixed several
        visual bugs and inconsistencies—such as incorrect icon sizes, misaligned
        elements, and mismatched colors. After the change, the component was
        easier to implement, easier to debug, and far less prone to introducing
        regressions.
        <br />
        <br />
        <strong>Feature Development – Exercise Swap System</strong> <br />
        I implemented a multi-step UI flow that let users swap exercises within
        dynamically generated workouts. The system included carousels, filtering
        logic, swap validation, and dynamic state handling to ensure
        replacements stayed within workout constraints. I focused on maintaining
        state persistence and delivering clear, responsive UI feedback to make
        the experience feel seamless and empowering.
        <br />
        <br />
        Before this feature, users could only reroll exercises at random if they
        didn’t like a move. With the new system, they could browse, search, and
        filter to find moves that matched their goals and needs—giving them real
        control. Adoption was immediate and widespread—users embraced the added
        control, and it became a core part of the workout experience.
      </ProjectSectionText>

      <Spacer />
      <Spacer />
      <Image src={"/images/gigpit.png"} />
      <SectionDivider />

      <ProjectSectionText number="03" title="learnings">
        Working on Fit52 over several years taught me how much impact thoughtful
        structure can have—not just on users, but on the developers building the
        product. Refactoring components like the TopBar showed how simplifying
        architecture can prevent bugs, improve consistency, and make
        implementation faster across a growing codebase. <br />
        <br /> This was also where I first learned MobX and began understanding
        state management at scale. It gave me a foundational perspective on how
        architectural choices shape long-term maintainability and team
        efficiency. <br />
        <br />
        Building the exercise swap system reminded me how powerful it is to give
        users real control. That feature reinforced a product principle I carry
        with me: good UX means giving people the ability to shape their own
        experience.
      </ProjectSectionText>

      <SectionDivider />
    </>
  );
};

export default observer(ProjectPage);
