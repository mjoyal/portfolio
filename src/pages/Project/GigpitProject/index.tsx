import styled from "@emotion/styled";
import { observer } from "mobx-react";

import Button from "src/components/Button";

import { Stack, useMediaQuery, useTheme, Box } from "@mui/material";

import Spacer from "src/components/Spacer";
import { useState } from "react";
import MyRole from "./components/GigpitRoleSection";
import GigpitHeroSection from "./components/GigpitHeroSection";
import {
  PhoneMockImage,
  SectionDivider,
  ProjectPageContainer,
  StyledP,
  SectionTitle,
  ProjectImage,
  MockWrapper,
  BodyTextWrapper,
} from "../components";

const QuoteText = styled.h4`
  max-width: 700px;
  font-size: 3rem;
`;

const PageTitle = styled.h1`
  max-width: 700px;
  margin-bottom: 20px;
`;

const SmallerQuoteText = styled.h6`
  max-width: 500px;
`;

const GitpitProject = () => {
  const theme = useTheme();

  const [isRoleTextHidden, setIsRoleTextHidden] = useState(true);

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <ProjectPageContainer>
      <GigpitHeroSection />
      {isSmallScreen ? <Spacer /> : <Spacer level={50} />}
      <Stack alignItems={"flex-start"} borderBottom={1}>
        <PageTitle>
          A web app making local music easy to find{" "}
          <span>(and hard to miss)</span>
        </PageTitle>
        <Spacer />

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
        <Spacer level={6} />
        <Button href="https://gigpit.ca">View Project</Button>
        <Spacer level={14} />
      </Stack>

      <Spacer level={14} />
      <MyRole
        isRoleTextHidden={isRoleTextHidden}
        setIsRoleTextHidden={setIsRoleTextHidden}
      />
      <Spacer level={10} />
      <ProjectImage src={"/images/project-landscape.png"} />
      <SectionDivider />
      <Stack
        direction={{ xs: "column", md: "row" }}
        gap={4}
        borderBottom={1}
        paddingBottom={10}
      >
        <QuoteText>
          We wanted the platform to feel{" "}
          <Box component="span" color="text.secondary">
            fun and engaging
          </Box>
          —something users would actually enjoy exploring.
        </QuoteText>
        <SmallerQuoteText>
          That meant stripping away friction, simplifying decision points, and
          making every interaction feel intuitive. Two areas that shaped that
          process most: the home screen and navigation.
        </SmallerQuoteText>
      </Stack>

      <SectionDivider />
      <Box>
        <SectionTitle>Reimagining the home page</SectionTitle>
        <BodyTextWrapper>
          <Stack gap={{ xs: 3, md: 5 }}>
            <StyledP>
              We initially considered separating content into a traditional home
              screen and a personalized “For You” page, but the overlap
              introduced unnecessary complexity.
            </StyledP>
            <StyledP>
              Instead, we embedded personalization directly into the home screen
              using dynamic carousels based on user location and saved
              shows—keeping the experience streamlined and relevant.
            </StyledP>
          </Stack>
          <Stack gap={{ xs: 3, md: 5 }}>
            <StyledP>
              This approach gave users immediate access to content that felt
              tailored, while maintaining a clean, focused interface.
            </StyledP>
            <StyledP>
              The structure also sets us up to expand personalization over time,
              incorporating behaviour like attended shows, liked events, or
              artist follows.
            </StyledP>
          </Stack>
        </BodyTextWrapper>
      </Box>

      <SectionDivider />

      <MockWrapper>
        <PhoneMockImage src={"/images/gigpit/home-page.png"} />
        <PhoneMockImage src={"/images/gigpit/home-page-logged-in.png"} />
      </MockWrapper>
      <SectionDivider />

      <Box>
        <SectionTitle>Expansive Navigation</SectionTitle>
        <Stack direction={{ xs: "column", md: "row" }} gap={{ xs: 3, md: 10 }}>
          <Stack gap={{ xs: 3, md: 5 }}>
            <StyledP>
              We explored using a bottom navigation bar to keep core actions
              within reach on mobile, but it would’ve required reworking the
              desktop layout or accepting cross-platform inconsistencies.
              Instead, we chose a more adaptive approach: sticky key actions on
              each screen, layered with intuitive navigation paths.
            </StyledP>
            <StyledP>
              We designed navigation to feel effortless, letting users follow
              their curiosity and always land somewhere meaningful—whether
              tapping a flyer, exploring an artist, or diving into suggested
              shows.
            </StyledP>
          </Stack>
          <Stack gap={{ xs: 3, md: 5 }}>
            <StyledP>
              Search remained accessible across all pages, and we surfaced
              relevant content through carousels, inline links, and bold action
              cards like “Explore Your Suggested Shows” and “View Resources.”
            </StyledP>
            <StyledP>
              Together, these choices made it easy for users to move through the
              platform naturally, deepening their connection to the local scene
              with every interaction.
            </StyledP>
          </Stack>
        </Stack>
      </Box>

      <SectionDivider />

      <MockWrapper>
        <PhoneMockImage src={"/images/gigpit/show-detail.png"} />
        <PhoneMockImage src={"/images/gigpit/home-page-scrolled.png"} />
      </MockWrapper>

      <SectionDivider />
      <Box>
        <SectionTitle>Outcomes</SectionTitle>
        <Stack direction={{ xs: "column", md: "row" }} gap={{ xs: 3, md: 10 }}>
          <Stack gap={{ xs: 3, md: 5 }}>
            <StyledP>
              We built a fully functional web application, optimized for both
              desktop and mobile, that gives local music the visibility it
              deserves. Unlike platforms driven by opaque algorithms, Gigpit
              democratizes discovery, letting users find shows through community
              contributions—not rankings.
            </StyledP>
            <StyledP>
              Once launched, users will be able to upload events, explore shows
              by venue, artist, date, or mood, and follow artists through
              personalized profiles.
            </StyledP>
          </Stack>
          <Stack gap={{ xs: 3, md: 5 }}>
            <StyledP>
              Features like curated artist pages, a venue map, and a community
              blog support the broader ecosystem, making it easier to find,
              support, and stay connected to the local scene.
            </StyledP>
            <StyledP>
              Through contributions across both design and engineering, I helped
              shape a platform grounded in clarity, equitable access, thoughtful
              design, and long-term scalability.
            </StyledP>
          </Stack>
        </Stack>
      </Box>
      <SectionDivider />
      <MockWrapper>
        <PhoneMockImage src={"/images/gigpit/shows-grid.png"} />
        <PhoneMockImage src={"/images/gigpit/artist-profile.png"} />
      </MockWrapper>

      <SectionDivider />

      <Box>
        <SectionTitle>Learnings</SectionTitle>
        <Stack direction={{ xs: "column", md: "row" }} gap={{ xs: 3, md: 10 }}>
          <StyledP>
            This project clarified how much I value constraints—and how
            essential they are for building focused, high-impact products.
            Without a product manager or clear MVP boundaries, scope expanded
            quickly, and engineers often built complex features ahead of
            foundational ones. As design adapted to these shifts, the product
            grew in size but not always in strategic value.
          </StyledP>
          <StyledP>
            The experience deepened my understanding of how business-minded my
            design process is. I care deeply about building polished, lean tools
            that serve a clear purpose and mission. I learned that having a
            shared north star and defined scope isn’t a limitation—it is what
            enables thoughtful, intentional work that creates real value.
          </StyledP>
        </Stack>
      </Box>
    </ProjectPageContainer>
  );
};

export default observer(GitpitProject);
