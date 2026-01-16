import styled from "@emotion/styled";
import ProjectCard from "../../../../components/ProjectCard";
import { observer } from "mobx-react";
import useStores from "src/hooks/useStores";
import { Box, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import Spacer from "src/components/Spacer";
import { motion } from "framer-motion";

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  ${({ theme }) => (theme as any).breakpoints.up("md")} {
    flex-direction: row;
    gap: 16px;
  }
`;

const CustomCursor = styled(motion(Stack))<{ isVisible: boolean }>`
  position: fixed;
  padding: 30px;
  color: ${({ theme }) => (theme as any).palette.background.default};
  background: ${({ theme }) => (theme as any).palette.text.secondary};
  font-weight: 600;
  font-size: 1.35rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  pointer-events: none;
  transform: translate(-50%, -80%) rotate(-10deg);
  border: ${({ theme }) =>
    `1.5px solid ${(theme as any).palette.primary.main}`};
  z-index: 9999;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 0.3s ease;
  letter-spacing: -1px;
  line-height: 1;
  white-space: nowrap;
`;

interface IProjectSectionProps {
  hasAnimated: boolean;
}

const ProjectSection = (props: IProjectSectionProps) => {
  const { hasAnimated } = props;
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
    <motion.div
      initial={hasAnimated ? false : { y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeInOut", delay: 1.2 }}
    >
      <Box id="work" paddingTop={"30px"}>
        <h4>Work that's changed me</h4>
        <Spacer level={5} />
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
          <svg
            width="26"
            height="22"
            viewBox="0 0 26 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.16592 0L24.8713 5.35515L25.4295 6.67982L18.2933 21.6602L15.3284 20.127C17.5943 15.7994 20.1448 11.6471 21.9984 8.84236L21.8362 8.65772C18.7706 10.2868 14.1258 12.3706 10.0086 14.1055L1.23709 17.8017L0 14.866L8.77147 11.1698C12.8887 9.43482 17.6391 7.60169 20.9461 6.54541L20.9272 6.30042C17.5029 5.67762 12.8722 4.59345 8.19253 3.19268L9.16592 0Z"
              fill="black"
            />
          </svg>
        </CustomCursor>
      </Box>
    </motion.div>
  );
};

export default observer(ProjectSection);
