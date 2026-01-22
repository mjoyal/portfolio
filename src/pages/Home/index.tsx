import { observer } from "mobx-react";
import styled from "@emotion/styled";
import HeroSection from "./components/HeroSection";
import ProjectSection from "./components/ProjectSection";
import SkillsSection from "./components/SkillsSection";

const HomePageContainer = styled.div`
  /* These 100% widths are important to keep the overall margin of the site */
  width: 100%;
`;

// TODO: Section Divider & Spacer Components
const SectionDivider = styled.div`
  height: 150px;

  ${({ theme }) => (theme as any).breakpoints.up("md")} {
    height: 200px;
  }
`;

interface IHomePageProps {
  hasAnimated: boolean;
}

const HomePage = (props: IHomePageProps) => {
  const { hasAnimated } = props;

  return (
    <HomePageContainer>
      <HeroSection hasAnimated={hasAnimated} />
      <ProjectSection hasAnimated={hasAnimated} />
      <SectionDivider />
      <SkillsSection />
    </HomePageContainer>
  );
};

export default observer(HomePage);
