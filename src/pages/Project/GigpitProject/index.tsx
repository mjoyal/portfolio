import styled from "@emotion/styled";
import { observer } from "mobx-react";

import Button from "src/components/Button";

import { Stack, useMediaQuery, useTheme, Box } from "@mui/material";
import ProjectSectionText from "../ProjectSectionText";
import GigpitLogo from "src/icons/GigpitLogo";
// import OpenNewArrow from "src/icons/OpenNewArrow";

const Image = styled.img`
  display: block;
  height: auto;
  width: 100%;
  object-fit: cover;
  border-radius: 5px;
`;

const HeroImage = styled.img`
  height: auto;
  width: 600px;
  border-radius: 5px;
`;

const Spacer = styled.div`
  height: 24px;
`;

const SectionDivider = styled.div`
  height: 200px;
`;

const StyledP = styled.p`
  max-width: 70ch;
`;

const StyledTitle = styled.h4`
  max-width: 20ch;
`;

const GitpitProject = () => {
  const theme = useTheme();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box marginTop={10} marginX={{ xs: 0, md: 10 }}>
      <Stack
        direction={{ xs: "column", md: "row-reverse" }}
        alignItems={"flex-end"}
      >
        <Stack gap={5}>
          <GigpitLogo />
          <HeroImage src={"/images/project-square.png"} />
        </Stack>
        <Stack flex={1}>
          <h5>Role</h5>
          <p>UX/UI & Front-end Engineering</p>
          <h5>Year</h5>
          <p>2024 - Current</p>
          <h5>Design Collaborator</h5>
          <p>Lizzie, Lead Design</p>
        </Stack>
      </Stack>
      {isSmallScreen ? <Spacer /> : <SectionDivider />}
      <Stack alignItems={"flex-start"}>
        <StyledTitle>
          A web app making local music easy to find <em>(and hard to miss)</em>
        </StyledTitle>
        <Spacer />
        <Stack>
          <StyledP>
            Local music often lives in the margins, buried in Instagram stories,
            scattered across venue websites, or passed along by word of mouth.
            For many artists, this means playing to half-empty rooms—not for
            lack of talent, but for lack of visibility.
          </StyledP>
          <StyledP>
            Gigpit was built to change that. We created a platform where anyone
            can post a show and everyone will find it. A shared space for
            artists, organizers, and fans to connect, making it easier to show
            up for the scene. By centralizing event info and simplifying
            discovery, GigPit helps give local music the audience it deserves.
          </StyledP>
        </Stack>
        <Spacer />
        <Spacer />
        <Button href="https://gigpit.ca">View Project</Button>
        <SectionDivider />
      </Stack>
      <SectionDivider />

      <Spacer />
      <ProjectSectionText number="01" title="My Role">
        I joined Gigpit to help translate it from a static website into a
        mobile-first web application. While the early design work was strong,
        the platform needed clearer UX flows and a product-driven approach.
        <br />
        <br /> I brought a product-focused mindset, thinking not just about how
        the interface looked but how it would be used, built, and scaled. I led
        mobile design, created high-fidelity mockups in Figma, and refined key
        user flows to build on a strong visual foundation and deliver a more
        functional, intuitive experience. I also made decisions to prioritize
        development efficiency and reusability without compromising user
        experience. <br />
        <br />
        Midway through, I stepped in on the engineering side to polish
        high-impact areas like navigation, CTA buttons, the homepage, and the
        “Post a Show” flow, spaces that defined first impressions and core
        actions. To address styling inconsistencies, I introduced more reusable
        Svelte components, reduced redundant Tailwind usage, and implemented a
        basic Tailwind config to lay the foundation for a more scalable styling
        system.
      </ProjectSectionText>
      <SectionDivider />
      <Spacer />
      <Spacer />
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
      <Spacer />
      <Spacer />

      <Spacer />
      <Spacer />
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
      <SectionDivider />

      <Spacer />
      <Spacer />
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
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
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
      <SectionDivider />

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: 5,
          width: "100%",
        }}
      >
        <Image src="/images/gitpit-explore.png" />
        <Stack>
          <h4>Design Process</h4>
          <Spacer />
          <p>
            We wanted the platform to feel fun and engaging—something users
            would actually enjoy exploring. That meant stripping away friction,
            simplifying decision points, and making every interaction feel
            intuitive. Two areas that shaped that process most: the home screen
            and navigation.
            <br /> <br />
            <strong>Reimagining the Home Page</strong> <br />
            We initially considered separating content into a traditional home
            screen and a personalized “For You” page, but the overlap introduced
            unnecessary complexity. Instead, we embedded personalization
            directly into the home screen using dynamic carousels based on user
            location and saved shows—keeping the experience streamlined and
            relevant. <br />
            <br />
            This approach gave users immediate access to content that felt
            tailored, while maintaining a clean, focused interface. The
            structure also sets us up to expand personalization over time,
            incorporating behaviour like attended shows, liked events, or artist
            follows.
            <br /> <br /> Every decision was grounded in our core mission: to
            make it easier for people to discover local music that speaks to
            them.
          </p>
        </Stack>
      </Box>
    </Box>
  );
};

export default observer(GitpitProject);

/* 

 <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: 10,
          width: "100%",
        }}
      >
        <Image src="/images/gitpit-explore.png" />
        <Stack justifyContent={"center"}>
          <h4>My role</h4>
          <Spacer />
          <p>
            I joined Gigpit to help translate it from a static website into a
            mobile-first web application. While the early design work was
            strong, the platform needed clearer UX flows and a product-driven
            approach.
            <br />
            <br /> I brought a product-focused mindset, thinking not just about
            how the interface looked but how it would be used, built, and
            scaled. I led mobile design, created high-fidelity mockups in Figma,
            and refined key user flows to build on a strong visual foundation
            and deliver a more functional, intuitive experience. I also made
            decisions to prioritize development efficiency and reusability
            without compromising user experience. <br />
            <br />
            Midway through, I stepped in on the engineering side to polish
            high-impact areas like navigation, CTA buttons, the homepage, and
            the “Post a Show” flow, spaces that defined first impressions and
            core actions. To address styling inconsistencies, I introduced more
            reusable Svelte components, reduced redundant Tailwind usage, and
            implemented a basic Tailwind config to lay the foundation for a more
            scalable styling system.
          </p>
        </Stack>
      </Box>
      <SectionDivider />
*/
