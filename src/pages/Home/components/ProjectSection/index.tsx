import styled from "@emotion/styled";
import ProjectCard from "../../../../components/ProjectCard";
import ProjectsTitle from "../../../../components/Titles/ProjectsTitle";
import { observer } from "mobx-react";
import useStores from "src/hooks/useStores";
import { Box, Stack } from "@mui/material";
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

const CustomCursor = styled(Stack)<{ isVisible: boolean }>`
  position: fixed;
  padding: 12px 20px;
  color: ${({ theme }) => (theme as any).palette.background.default};
  background: ${({ theme }) => (theme as any).palette.text.secondary};
  font-weight: 600;
  font-size: 1.35rem;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  pointer-events: none;
  transform: translate(-50%, -80%) rotate(-20deg);
  border: ${({ theme }) =>
    `1.5px solid ${(theme as any).palette.primary.main}`};
  z-index: 9999;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 0.3s ease;
  letter-spacing: -1px;
  line-height: 1;
  white-space: nowrap;
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
        direction={"row"}
        gap={1}
      >
        <span>Have a look</span>
      </CustomCursor>
    </Box>
  );
};

export default observer(ProjectSection);
