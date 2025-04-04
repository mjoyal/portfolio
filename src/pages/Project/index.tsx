import styled from "@emotion/styled";

import { observer } from "mobx-react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import Button from "src/components/Button";

import useStores from "src/hooks/useStores";
import ProjectSectionLabel from "./ProjectSectionLabel";
import { Box, Stack } from "@mui/material";

const ProjectPageContainer = styled.div`
  /* These 100% widths are important to keep the overall margin of the site */
  width: 100%;
  ${({ theme }) => (theme as any).breakpoints.up("md")} {
    padding-left: 60px;
    padding-right: 60px;
  }
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
`;

const SmallImage = styled.img`
  width: 48%;
  height: 100%;
`;

const Spacer = styled.div`
  height: 24px;
`;

const SectionDivider = styled.div`
  height: 200px;
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

  return (
    <ProjectPageContainer>
      <h1>{selectedProject?.name}</h1>
      <Image src={"/images/project-square.png"} />
      <Stack alignItems={"flex-start"}>
        <h4>a web application for discovering local music gigs.</h4>
        <p>
          maybe i could have a little bit of text here to fill out the space.
          could be a nice little morsel of text about me. little quirky facts.
          fun facts. but also serious facts. very professional serious facts.
        </p>
        <Spacer />
        <Button
          onClick={() => {
            alert("Not implemented");
          }}
        >
          View Project
        </Button>
        <SectionDivider />
      </Stack>

      <Stack flexDirection={"row"} gap={3}>
        <ProjectSectionLabel number="01" title="project overview" />

        <Box>
          <h4>a web application for discovering local music gigs.</h4>
          <p>
            maybe i could have a little bit of text here to fill out the space.
            could be a nice little morsel of text about me. little quirky facts.
            fun facts. but also serious facts. very professional serious facts.
          </p>
        </Box>
      </Stack>
      <Spacer />

      <Image src={"/images/project-landscape.png"} />
      <SectionDivider />

      <Stack flexDirection={"row"} gap={3}>
        <ProjectSectionLabel number="02" title="goals" />

        <Box>
          <h4>a web application for discovering local music gigs.</h4>
          <p>
            maybe i could have a little bit of text here to fill out the space.
            could be a nice little morsel of text about me. little quirky facts.
            fun facts. but also serious facts. very professional serious facts.
          </p>
        </Box>
      </Stack>
      <Spacer />

      <Image src={"/images/project-landscape.png"} />
      <SectionDivider />

      <Stack flexDirection={"row"} gap={3}>
        <ProjectSectionLabel number="03" title="process" />

        <Box>
          <h4>a web application for discovering local music gigs.</h4>
          <p>
            maybe i could have a little bit of text here to fill out the space.
            could be a nice little morsel of text about me. little quirky facts.
            fun facts. but also serious facts. very professional serious facts.
          </p>
        </Box>
      </Stack>
      <Spacer />

      <Stack gap={1}>
        <Stack direction={"row"} gap={1}>
          <SmallImage src={"/images/project-square.png"} />
          <SmallImage src={"/images/project-square.png"} />
        </Stack>

        <Image src={"/images/project-landscape.png"} />
      </Stack>
      <SectionDivider />

      <Stack flexDirection={"row"} gap={3}>
        <ProjectSectionLabel number="04" title="outcomes" />

        <Stack alignItems={"flex-start"}>
          <h4>a web application for discovering local music gigs.</h4>
          <p>
            maybe i could have a little bit of text here to fill out the space.
            could be a nice little morsel of text about me. little quirky facts.
            fun facts. but also serious facts. very professional serious facts.
          </p>
          <Spacer />
          <Button
            onClick={() => {
              alert("Not implemented");
            }}
          >
            View Project
          </Button>
        </Stack>
      </Stack>
      <Spacer />

      <Image src={"/images/project-landscape.png"} />
      <Image src={"/images/project-landscape.png"} />
      <SectionDivider />
    </ProjectPageContainer>
  );
};

export default observer(ProjectPage);
