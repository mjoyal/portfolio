import styled from "@emotion/styled";
import { observer } from "mobx-react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import useStores from "src/hooks/useStores";
import { Box, Stack } from "@mui/material";

import GigpitProject from "./GigpitProject";
import CrewlywedProject from "./CrewlywedProject";
import Fit52Project from "./Fit52Project";

const PageContainer = styled(Stack)`
  /* These 100% widths are important to keep the overall margin of the site */
  width: 100%;
  min-height: 100vh;
`;

const ProjectPage = () => {
  const {
    projectStore: { selectedProject, setSelectedProject, getProjectFromSlug },
  } = useStores();

  const { slug } = useParams();

  useEffect(() => {
    if (!selectedProject && slug) {
      const project = getProjectFromSlug(slug);
      project?.id && setSelectedProject(project?.id);
    }
  }, [getProjectFromSlug, selectedProject, setSelectedProject, slug]);

  const renderPageContent = () => {
    if (selectedProject?.slug === "gigpit") {
      return <GigpitProject />;
    }

    if (selectedProject?.slug === "crewlywed") {
      return <CrewlywedProject />;
    }

    if (selectedProject?.slug === "fit52") {
      return <Fit52Project />;
    }

    return (
      <Box>
        <h2>Project not found</h2>
      </Box>
    );
  };

  return <PageContainer>{renderPageContent()}</PageContainer>;
};

export default observer(ProjectPage);
