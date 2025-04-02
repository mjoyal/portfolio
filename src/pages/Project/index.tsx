import styled from "@emotion/styled";

import { observer } from "mobx-react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import BodyText from "src/components/BodyText";
import Button from "src/components/Button";

import useStores from "src/hooks/useStores";

const ProjectPageContainer = styled.div``;

const Image = styled.img`
  height: 100%;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
      <Container>
        <h3>a web application for discovering local music gigs.</h3>
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
      </Container>
      <Image src={"/images/gigpit-landscape.png"} />
      <Image src={"/images/gigpit-landscape.png"} />
    </ProjectPageContainer>
  );
};

export default observer(ProjectPage);
