import styled from "@emotion/styled";
import { observer } from "mobx-react";

import Button from "src/components/Button";

import { Stack, useMediaQuery, useTheme, Box } from "@mui/material";
import LittleArrow from "src/icons/LittleArrow";
import ProjectSectionText from "../ProjectSectionText";
import Spacer from "src/components/Spacer";
import { useState } from "react";

const HeaderSection = styled.div`
  margin-top: 48px;
  display: flex;
`;

const StyledHeader = styled.h2`
  text-align: right;
  line-height: 1;
`;

const Image = styled.img`
  display: block;
  height: auto;
  width: 100%;
  object-fit: cover;
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const StyledP = styled.p<{ isHidden?: boolean }>`
  max-width: 400px;
  display: ${({ isHidden = false }) => (isHidden ? "none" : "block")};
`;

const StyledTitle = styled.h4`
  max-width: 700px;
`;

const ReadMoreButton = styled.button<{ isHidden?: boolean }>`
  border-bottom: 1px solid white;
  display: ${({ isHidden = false }) => (isHidden ? "none" : "block")};
`;

const GitpitProject = () => {
  const theme = useTheme();

  const [isRoleTextHidden, setIsRoleTextHidden] = useState(true);

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box marginX={{ sm: 5, md: 10 }}>
      <HeaderSection>
        {!isSmallScreen && (
          <Stack flex={1} justifyContent={"flex-end"}>
            <LittleArrow />
          </Stack>
        )}
        <Stack gap={8} flex={1}>
          <StyledHeader>Gigpit</StyledHeader>
          <Image src={"/images/project-square.png"} />
        </Stack>
      </HeaderSection>

      <Spacer level={{ sm: 6, lg: 50 }} />
      <Stack alignItems={"flex-start"}>
        <StyledTitle>
          A web app making local music easy to find{" "}
          <span>(and hard to miss)</span>
        </StyledTitle>
        <Spacer level={2} />

        <Stack direction={{ sm: "column", lg: "row" }} gap={{ sm: 5, md: 10 }}>
          <StyledP>
            Local music often lives in the margins—buried in Instagram stories,
            scattered across venue sites, or shared by word of mouth. For many
            artists, that means playing to half-empty rooms, not for lack of
            talent, but visibility. Gigpit was built to change that.
          </StyledP>

          <StyledP>
            We created a platform where anyone can post a show and everyone can
            find it—a shared space for artists, organizers, and fans. By
            centralizing events and simplifying discovery, Gigpit helps give
            local music the audience it deserves.
          </StyledP>
        </Stack>
        <Spacer />
        <Spacer />
        <Button
          onClick={() => {
            alert("Not implemented");
          }}
        >
          View Project
        </Button>
      </Stack>
      <Spacer level={14} />
      <hr />
      <Spacer level={14} />

      <h4>My role</h4>
      <Spacer level={6} />
      <Stack direction={{ sm: "column", lg: "row" }} gap={{ sm: 5, md: 10 }}>
        <Stack direction={"column"} gap={{ sm: 3, md: 6 }}>
          <Stack alignItems={"flex-start"}>
            <StyledP>
              I joined Gigpit to help evolve the early design work—already
              visually strong—into a mobile-first web application with clearer
              UX flows. My focus was on strengthening the user journey and
              introducing a more product-driven approach to support the
              platform’s growth.
            </StyledP>
            <Spacer level={2} />
            <ReadMoreButton
              isHidden={!isRoleTextHidden}
              onClick={() => setIsRoleTextHidden(false)}
            >
              Read more
            </ReadMoreButton>
          </Stack>

          <StyledP isHidden={isRoleTextHidden}>
            I brought a product-focused mindset, thinking not just about how the
            interface looked but how it would be used, built, and scaled. I led
            mobile design, created high-fidelity mockups in Figma, and refined
            key user flows to build on a strong visual foundation and deliver a
            more functional, intuitive experience.
          </StyledP>
        </Stack>
        <Stack
          direction={"column"}
          alignItems={"flex-start"}
          gap={{ sm: 3, md: 6 }}
        >
          <StyledP isHidden={isRoleTextHidden}>
            Midway through, I stepped in on the engineering side to polish
            high-impact areas like navigation, CTA buttons, the homepage, and
            the “Post a Show” flow, spaces that defined first impressions and
            core actions.
          </StyledP>
          <StyledP isHidden={isRoleTextHidden}>
            To address styling inconsistencies, I introduced more reusable
            Svelte components, reduced redundant Tailwind usage, and implemented
            a basic Tailwind config to lay the foundation for a more scalable
            styling system.
          </StyledP>
          <ReadMoreButton
            isHidden={isRoleTextHidden}
            onClick={() => setIsRoleTextHidden(true)}
          >
            Read less
          </ReadMoreButton>
        </Stack>
      </Stack>
      <Image src={"/images/project-landscape.png"} />
      <Spacer level={10} />

      <ProjectSectionText number="02" title="Design Process">
        We wanted the platform to feel fun and engaging—something users would
        actually enjoy exploring. That meant stripping away friction,
        simplifying decision points, and making every interaction feel
        intuitive. Two areas that shaped that process most: the home screen and
        navigation.
        <br /> <br />
        <strong>Reimagining the Home Page</strong> <br />
        We initially considered separating content into a traditional home
        screen and a personalized “For You” page, but the overlap introduced
        unnecessary complexity. Instead, we embedded personalization directly
        into the home screen using dynamic carousels based on user location and
        saved shows—keeping the experience streamlined and relevant. <br />
        <br />
        This approach gave users immediate access to content that felt tailored,
        while maintaining a clean, focused interface. The structure also sets us
        up to expand personalization over time, incorporating behaviour like
        attended shows, liked events, or artist follows.
        <br /> <br /> Every decision was grounded in our core mission: to make
        it easier for people to discover local music that speaks to them.
      </ProjectSectionText>
      <Spacer level={25} />

      <ProjectSectionText number="02" title="Design Process">
        <strong>Rethinking Navigation</strong> <br />
        We initially considered a bottom navigation bar to keep core actions
        within easy reach on mobile. But introducing it would have meant
        reworking the desktop structure or risking inconsistency across
        platforms. Instead, we opted for a more adaptive solution: sticky key
        actions at the bottom of each screen, layered with intuitive pathways
        throughout the app.
        <br />
        <br />
        We designed navigation to feel effortless, letting users follow their
        curiosity and always land somewhere meaningful—whether tapping a flyer,
        exploring an artist, or diving into suggested shows. Search remained
        accessible across all pages, and we surfaced relevant content through
        carousels, inline links, and bold action cards like “Explore Your
        Suggested Shows” and “View Resources.”
        <br />
        <br />
        Together, these choices made it easy for users to move through the
        platform naturally, deepening their connection to the local scene with
        every interaction.
      </ProjectSectionText>

      <Spacer level={10} />

      <ProjectSectionText number="03" title="Outcomes">
        We built a fully functional web application, optimized for both desktop
        and mobile, that gives local music the visibility it deserves. Unlike
        platforms driven by opaque algorithms, Gigpit democratizes discovery,
        letting users find shows through community contributions—not rankings.
        <br />
        <br />
        Once launched, users will be able to upload events, explore shows by
        venue, artist, date, or mood, and follow artists through personalized
        profiles. Features like curated artist pages, a venue map, and a
        community blog support the broader ecosystem, making it easier to find,
        support, and stay connected to the local scene.
        <br />
        <br />
        Through contributions across both design and engineering, I helped shape
        a platform grounded in clarity, equitable access, thoughtful design, and
        long-term scalability.
      </ProjectSectionText>

      <Spacer level={25} />

      <ProjectSectionText number="04" title="Learnings" hasButton>
        This project clarified how much I value constraints—and how essential
        they are for building focused, high-impact products. Without a product
        manager or clear MVP boundaries, scope expanded quickly, and engineers
        often built complex features ahead of foundational ones. As design
        adapted to these shifts, the product grew in size but not always in
        strategic value. <br /> <br />
        The experience deepened my understanding of how business-minded my
        design process is. I care deeply about building polished, lean tools
        that serve a clear purpose and mission. I learned that having a shared
        north star and defined scope isn’t a limitation—it is what enables
        thoughtful, intentional work that creates real value.
      </ProjectSectionText>
    </Box>
  );
};

export default observer(GitpitProject);
