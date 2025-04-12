import styled from "@emotion/styled";
import ProjectCard from "../../../../components/ProjectCard";
import ProjectsTitle from "../../../../components/Titles/ProjectsTitle";
import { observer } from "mobx-react";
import useStores from "src/hooks/useStores";
import { Box } from "@mui/material";

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

const Spacer = styled.div`
  height: 48px;
`;
const ProjectSection = () => {
  const {
    projectStore: { projects },
  } = useStores();

  return (
    <Box id="work">
      <ProjectsTitle />
      <Spacer />
      <ProjectContainer>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ProjectContainer>
    </Box>
  );
};

export default observer(ProjectSection);
