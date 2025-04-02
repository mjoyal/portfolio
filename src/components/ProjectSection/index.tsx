import styled from "@emotion/styled";
import ProjectCard from "../ProjectCard";
import ProjectsTitle from "../Titles/ProjectsTitle";
import { observer } from "mobx-react";
import useStores from "src/hooks/useStores";

const ProjectContainer = styled.div`
  display: grid;

  ${({ theme }) => (theme as any).breakpoints.up("md")} {
    grid-template-columns: repeat(2, 1fr);
    justify-items: start;
  }
  gap: 48px;
`;

const ProjectSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

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
      </ProjectContainer>
    </ProjectSectionContainer>
  );
};

export default observer(ProjectSection);
