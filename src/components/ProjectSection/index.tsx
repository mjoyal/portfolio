import styled from "@emotion/styled";
import ProjectCard from "../ProjectCard";
import SkillsTitle from "../Titles/SkillsTitle";
import TechnologyTitle from "../Titles/TechnologyTitle";
import ProjectsTitle from "../Titles/ProjectsTitle";
import { observer } from "mobx-react";
import useStores from "src/hooks/useStores";

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-top: 100px;
  padding-bottom: 100px;
`;

const ProjectSectionContainer = styled.div``;

// TODO: Add image alts

const projects = [
  {
    id: 1,
    name: "gigpit",
    slug: "gigpit",
    role: "ui/ux design & ui development",
    imageSource: "/images/gigpit.png",
  },
  {
    id: 2,
    name: "fit52",
    slug: "fit52",
    role: "software engineer & ui/ux design",
    imageSource: "/images/fit52.png",
  },

  {
    id: 3,
    name: "crewlywed",
    slug: "crewlywed",
    role: "engineering & ui/ux design",
    imageSource: "/images/crewlywed.png",
  },
];

const ProjectSection = () => {
  const {
    projectStore: { projects },
  } = useStores();

  return (
    <ProjectSectionContainer>
      <ProjectsTitle />
      <ProjectContainer>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}

        <SkillsTitle />
        <TechnologyTitle />
      </ProjectContainer>
    </ProjectSectionContainer>
  );
};

export default observer(ProjectSection);
