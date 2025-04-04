import styled from "@emotion/styled";
import ProjectCard from "../ProjectCard";
import ProjectsTitle from "../Titles/ProjectsTitle";
import { observer } from "mobx-react";
import useStores from "src/hooks/useStores";

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${({ theme }) => (theme as any).breakpoints.up("md")} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      "top top"
      "left right";
    grid-column-gap: 40px;
  }
  gap: 40px;
  width: 100%;
`;

const ProjectSection = () => {
  const {
    projectStore: { projects },
  } = useStores();

  return (
    <>
      <ProjectsTitle />
      <ProjectContainer>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ProjectContainer>
    </>
  );
};

export default observer(ProjectSection);
