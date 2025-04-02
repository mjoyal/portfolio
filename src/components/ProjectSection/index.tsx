import styled from "@emotion/styled";
import ProjectCard from "../ProjectCard";
import ProjectsTitle from "../Titles/ProjectsTitle";
import { observer } from "mobx-react";
import useStores from "src/hooks/useStores";

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const ProjectSectionContainer = styled.div``;

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
