import { observer } from "mobx-react";
import styled from "@emotion/styled";
import HeroSection from "src/components/HeroSection";
import NumberedListItem from "src/components/NumberedListItem";
import ProjectSection from "src/components/ProjectSection";
import SkillsTitle from "src/components/Titles/SkillsTitle";
import TechnologyTitle from "src/components/Titles/TechnologyTitle";
import { Stack } from "@mui/material";

const HomePageContainer = styled.div`
  /* These 100% widths are important to keep the overall margin of the site */
  width: 100%;
`;

const ParagraphContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 0;
`;

const StyledText = styled.p`
  width: 35ch;
  // Keeps text nice and square
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const StyledStack = styled(Stack)`
  flex: 1 1 0;
`;

const Spacer = styled.div`
  height: 40px;
`;

// TODO: Section Divider & Spacer Components
const SectionDivider = styled.div`
  height: 200px;
`;

const HomePage = () => {
  return (
    <HomePageContainer>
      <HeroSection />
      <SectionDivider />
      <ProjectSection />
      <SectionDivider />

      <Stack direction={{ md: "row" }} rowGap={5}>
        <StyledStack>
          <SkillsTitle />
          <Spacer />
          <ListContainer>
            <NumberedListItem number="01" listItem="front-end engineering" />
            <NumberedListItem number="02" listItem="ux/ ui design" />
            <NumberedListItem number="03" listItem="business degree" />
          </ListContainer>
        </StyledStack>

        <ParagraphContainer>
          <StyledText>
            maybe i could have a little bit of text here to fill out the space.
            could be a nice little morsel of text about me. little quirky facts.
            fun facts. but also serious facts. very professional serious facts.
          </StyledText>
        </ParagraphContainer>
      </Stack>
      <SectionDivider />
      <Stack alignItems={{ xs: "center", md: "flex-end" }}>
        <Stack paddingRight={{ xs: 0, md: 6 }}>
          <TechnologyTitle />
          <Spacer />
          <ListContainer>
            <NumberedListItem number="01" listItem="react & react native" />
            <NumberedListItem number="02" listItem="javascript" />
            <NumberedListItem number="03" listItem="html, css" />
            <NumberedListItem number="04" listItem="css libraries" />
            <NumberedListItem number="05" listItem="figma" />
          </ListContainer>
        </Stack>
      </Stack>
      <SectionDivider />
    </HomePageContainer>
  );
};

export default observer(HomePage);
