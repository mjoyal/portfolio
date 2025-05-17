import { observer } from "mobx-react";
import styled from "@emotion/styled";
import HeroSection from "./components/HeroSection";
import ProjectSection from "./components/ProjectSection";
import SkillsSection from "./components/SkillsSection";
import BioSection from "./components/BioSection";

const HomePageContainer = styled.div`
  /* These 100% widths are important to keep the overall margin of the site */
  width: 100%;
`;

// TODO: Section Divider & Spacer Components
const SectionDivider = styled.div`
  height: 150px;

  @media (min-width: 900px) {
    height: 200px;
  }
`;

const HomePage = () => {
  return (
    <HomePageContainer>
      <HeroSection />
      <SectionDivider id="bio" />
      <BioSection />
      <SectionDivider />
      <ProjectSection />
      <SectionDivider />
      <SkillsSection />
      <SectionDivider />
    </HomePageContainer>
  );
};

export default observer(HomePage);
