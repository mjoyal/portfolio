import { observer } from "mobx-react";
import EmailMeButton from "src/components/EmailMeButton";
import HeroSection from "src/components/HeroSection";
import ProjectSection from "src/components/ProjectSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ProjectSection />
      <EmailMeButton />
    </>
  );
};

export default observer(HomePage);
