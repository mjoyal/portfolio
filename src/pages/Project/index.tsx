import styled from "@emotion/styled";

import { observer } from "mobx-react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import BodyText from "src/components/BodyText";
import Button from "src/components/Button";

import useStores from "src/hooks/useStores";
import ProjectSectionLabel from "./ProjectSectionLabel";
import { Box, Stack } from "@mui/material";

const ProjectPageContainer = styled.div``;

const Image = styled.img`
  height: 100%;
  width: 100%;
`;

const SmallImage = styled.img`
  background-color: blue;
  width: 48%;
  height: 100%;
`;

const Spacer = styled.div`
  height: 24px;
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
      <Image src={"/images/gigpit-square.png"} />
      <Stack alignItems={"flex-start"}>
        <h4>a web application for discovering local music gigs.</h4>
        <BodyText>
          maybe i could have a little bit of text here to fill out the space.
          could be a nice little morsel of text about me. little quirky facts.
          fun facts. but also serious facts. very professional serious facts.
        </BodyText>
        <Spacer />
        <Button
          onClick={() => {
            alert("Not implemented");
          }}
        >
          View Project
        </Button>
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
      </Stack>

      <Stack flexDirection={"row"} gap={3}>
        <ProjectSectionLabel number="01" title="project overview" />

        <Box>
          <h4>a web application for discovering local music gigs.</h4>
          <BodyText>
            maybe i could have a little bit of text here to fill out the space.
            could be a nice little morsel of text about me. little quirky facts.
            fun facts. but also serious facts. very professional serious facts.
          </BodyText>
        </Box>
      </Stack>
      <Spacer />

      <Image src={"/images/gigpit-landscape.png"} />
      <Spacer />

      <Stack flexDirection={"row"} gap={3}>
        <ProjectSectionLabel number="02" title="goals" />

        <Box>
          <h4>a web application for discovering local music gigs.</h4>
          <BodyText>
            maybe i could have a little bit of text here to fill out the space.
            could be a nice little morsel of text about me. little quirky facts.
            fun facts. but also serious facts. very professional serious facts.
          </BodyText>
        </Box>
      </Stack>
      <Spacer />

      <Spacer />
      <Image src={"/images/gigpit-landscape.png"} />
      <Spacer />

      <Stack flexDirection={"row"} gap={3}>
        <ProjectSectionLabel number="03" title="process" />

        <Box>
          <h4>a web application for discovering local music gigs.</h4>
          <BodyText>
            maybe i could have a little bit of text here to fill out the space.
            could be a nice little morsel of text about me. little quirky facts.
            fun facts. but also serious facts. very professional serious facts.
          </BodyText>
        </Box>
      </Stack>
      <Spacer />

      <Stack gap={1}>
        <Stack direction={"row"} gap={1}>
          <SmallImage src={"/images/gigpit-square.png"} />
          <SmallImage src={"/images/gigpit-square.png"} />
        </Stack>

        <Image src={"/images/gigpit-landscape.png"} />
      </Stack>
      <Spacer />

      <Stack flexDirection={"row"} gap={3}>
        <ProjectSectionLabel number="04" title="outcomes" />

        <Box>
          <h4>a web application for discovering local music gigs.</h4>
          <BodyText>
            maybe i could have a little bit of text here to fill out the space.
            could be a nice little morsel of text about me. little quirky facts.
            fun facts. but also serious facts. very professional serious facts.
          </BodyText>
        </Box>
      </Stack>
      <Spacer />

      <Image src={"/images/gigpit-landscape.png"} />
      <Image src={"/images/gigpit-landscape.png"} />
    </ProjectPageContainer>
  );
};

export default observer(ProjectPage);
