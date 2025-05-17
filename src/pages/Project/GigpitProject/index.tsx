import styled from "@emotion/styled";
import { observer } from "mobx-react";

import { Stack, Box } from "@mui/material";

import Spacer from "src/components/Spacer";

import {
  SectionDivider,
  ProjectPageContainer,
  StyledP,
  SectionTitle,
  ProjectImage,
  MockWrapper,
  BodyTextWrapper,
  PhoneMock,
  HeroSectionWrapper,
} from "../components";
import GigpitLogo from "src/icons/GigpitLogo";
import useStores from "src/hooks/useStores";
import ProjectOverview from "../components/ProjectOverview";

const QuoteText = styled.h4`
  max-width: 700px;
  font-size: 3rem;
`;

const SmallerQuoteText = styled.h6`
  max-width: 500px;
`;

const GitpitProject = () => {
  const {
    projectStore: { selectedProject },
  } = useStores();

  return (
    <ProjectPageContainer>
      <HeroSectionWrapper>
        <GigpitLogo />
        <ProjectImage src={selectedProject?.imageSource} />
      </HeroSectionWrapper>

      <ProjectOverview
        project="Gigpit"
        title="A web app making local music easy to find (and hard to miss)"
        paragraphs={[
          "Local music often lives in the margins—buried in Instagram stories, scattered across venue sites, or shared by word of mouth. For many artists, that means playing to half-empty rooms, not for lack of talent, but visibility. Gigpit was built to change that.",
          "We created a platform where anyone can post a show and everyone can find it—a shared space for artists, organizers, and fans. By centralizing events and simplifying discovery, Gigpit helps give local music the audience it deserves.",
        ]}
        // paragraphs={[
        //   "Local music often gets lost—tucked in stories, scattered across venue sites, or passed along by word of mouth. Gigpit changes that by centralizing shows into one simple, searchable space. Anyone can post. Everyone can find. It’s built to give local music the audience it deserves.",
        // ]}
        collaborators={
          "Elizabeth Scott, Aidan Polglase, Evan Dungate, Josh Taylor"
        }
        url="gitpit.ca"
        date="2024 - Present"
      />

      <SectionDivider />
      <Stack
        direction={{ xs: "column-reverse", lg: "row" }}
        gap={4}
        justifyContent={"space-between"}
      >
        <Box>
          <SectionTitle>My Role</SectionTitle>
          <Stack gap={{ xs: 3, md: 5 }}>
            <StyledP>
              I joined Gigpit to help evolve early design work—already visually
              strong—into a mobile-first web app with clearer UX and a more
              product-driven approach. I led mobile design, created
              high-fidelity mockups in Figma, and refined key user flows to
              deliver a more functional, intuitive experience. My focus wasn’t
              just on how the interface looked, but how it would be used, built,
              and scaled.
            </StyledP>
            <StyledP>
              Midway through, I began contributing on the engineering side to
              refine high-impact areas like navigation, CTA buttons, the
              homepage, and the “Post a Show” flow—spaces that shaped first
              impressions. I introduced more reusable Svelte components, reduced
              redundant Tailwind usage, and implemented a theme config.
              Together, these changes not only improved visual consistency but
              also set the stage for faster, more maintainable growth.
            </StyledP>
          </Stack>
        </Box>
        <ProjectImage src={"/images/gigpit/hero.png"} />
      </Stack>

      <SectionDivider />
      <Stack
        direction={{ xs: "column", md: "row" }}
        gap={4}
        borderBottom="1px solid rgba(245, 245, 245, 0.75)"
        paddingBottom={15}
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
              Initially, we considered separating content into a traditional
              home screen and a personalized “For You” page, but the overlap
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

      <Spacer level={20} />

      <MockWrapper>
        <PhoneMock
          src={"/images/gigpit/home-page.png"}
          label="Explore page hero section, user not logged in"
        />
        <PhoneMock
          src={"/images/gigpit/home-page-logged-in.png"}
          label="Customized explore page, logged in state, user has access to their saved upcoming shows"
        />
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

      <Spacer level={20} />

      <MockWrapper>
        <PhoneMock
          src={"/images/gigpit/show-detail.png"}
          label="Show detail page, featuring sticky buttons for key actions"
        />
        <PhoneMock
          src={"/images/gigpit/home-page-scrolled.png"}
          label="Further down Explore page, showing key actions cards for navigation"
        />
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
      <Spacer level={20} />
      <MockWrapper>
        <PhoneMock
          src={"/images/gigpit/shows-grid.png"}
          label="Shows page, grid view. Ability to search, filter, and switch to list or map view."
        />
        <PhoneMock
          src={"/images/gigpit/artist-profile.png"}
          label="Artist Profile, displaying their upcoming shows, their profile stats, and their suggested shows"
        />
      </MockWrapper>

      <SectionDivider />

      <Box>
        <SectionTitle>Learnings</SectionTitle>
        <Stack direction={{ xs: "column", md: "row" }} gap={{ xs: 3, md: 10 }}>
          <StyledP>
            This project clarified the value of constraints—and how essential
            they are for building focused, high-impact products. Without a
            product manager or clear MVP boundaries, scope expanded quickly, and
            exciting features were sometimes built ahead of solidifying
            foundational ones. The product expanded rapidly—sometimes outpacing
            our capacity to refine, support, or strategically position what
            mattered most.
          </StyledP>
          <StyledP>
            The experience deepened my understanding of how product-minded my
            design process is, and how much I value building lean, well-crafted
            tools that serve a clear purpose and mission. It also reinforced how
            essential constraints are to doing thoughtful, high-impact work.
          </StyledP>
        </Stack>
      </Box>
    </ProjectPageContainer>
  );
};

export default observer(GitpitProject);
