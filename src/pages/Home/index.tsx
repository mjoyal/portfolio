import { observer } from "mobx-react";
import EmailMeButton from "src/components/EmailMeButton";
import HeroSection from "src/components/HeroSection";
import NumberedListItem from "src/components/NumberedListItem";
import ProjectSection from "src/components/ProjectSection";
import SkillsTitle from "src/components/Titles/SkillsTitle";
import TechnologyTitle from "src/components/Titles/TechnologyTitle";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ProjectSection />
      <SkillsTitle />
      <NumberedListItem number="01" listItem="front-end engineering" />
      <TechnologyTitle />
      <EmailMeButton />
    </>
  );
};

export default observer(HomePage);
