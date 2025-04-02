import { observer } from "mobx-react";
import styled from "@emotion/styled";
import BodyText from "src/components/BodyText";
import HeroSection from "src/components/HeroSection";
import NumberedListItem from "src/components/NumberedListItem";
import ProjectSection from "src/components/ProjectSection";
import SkillsTitle from "src/components/Titles/SkillsTitle";
import TechnologyTitle from "src/components/Titles/TechnologyTitle";

const HomePageContainer = styled.div``;

const StyledBodyText = styled(BodyText)`
  margin-left: 40px;
  margin-right: 40px;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-left: 40px;
  margin-right: 40px;
`;

const Spacer = styled.div`
  height: 40px;
`;

const HomePage = () => {
  return (
    <HomePageContainer>
      <HeroSection />
      <ProjectSection />
      <SkillsTitle />
      <ListContainer>
        <NumberedListItem number="01" listItem="front-end engineering" />
        <NumberedListItem number="02" listItem="ux/ ui design" />
        <NumberedListItem number="03" listItem="business degree" />
      </ListContainer>
      <Spacer />
      <StyledBodyText>
        maybe i could have a little bit of text here to fill out the space.
        could be a nice little morsel of text about me. little quirky facts. fun
        facts. but also serious facts. very professional serious facts.
      </StyledBodyText>
      <TechnologyTitle />

      <ListContainer>
        <NumberedListItem number="01" listItem="react & react native" />
        <NumberedListItem number="02" listItem="javascript" />
        <NumberedListItem number="03" listItem="html, css" />
        <NumberedListItem number="04" listItem="css libraries" />
        <NumberedListItem number="05" listItem="figma" />
      </ListContainer>
    </HomePageContainer>
  );
};

export default observer(HomePage);
