import styled from "@emotion/styled";
import ProjectCard from "../../../../components/ProjectCard";
import ProjectsTitle from "../../../../components/Titles/ProjectsTitle";
import { observer } from "mobx-react";
import useStores from "src/hooks/useStores";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";

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

const CustomCursor = styled.div<{ isVisible: boolean }>`
  position: fixed;
  width: 120px;
  height: 120px;
  background: black;
  color: white;
  font-weight: bold;
  font-size: 16px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 9999;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 0.2s ease;
`;

const Spacer = styled.div`
  height: 48px;
`;

const ProjectSection = () => {
  const {
    projectStore: { projects },
  } = useStores();

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Box id="work">
      <ProjectsTitle />
      <Spacer />
      <ProjectContainer>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            setIsVisible={setIsVisible}
          />
        ))}
      </ProjectContainer>
      <CustomCursor
        isVisible={isVisible}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      >
        VIEW
        <br />
        PROJECT
      </CustomCursor>
    </Box>
  );
};

export default observer(ProjectSection);
