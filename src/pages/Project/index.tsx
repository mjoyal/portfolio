import styled from "@emotion/styled";

import { observer } from "mobx-react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import Button from "src/components/Button";

import useStores from "src/hooks/useStores";
import { Stack, useMediaQuery, useTheme } from "@mui/material";
import LittleArrow from "src/icons/LittleArrow";
import OpenNewArrow from "src/icons/OpenNewArrow";
import ProjectSectionText from "./ProjectSectionText";

const ProjectPageContainer = styled.div`
  /* These 100% widths are important to keep the overall margin of the site */
  width: 100%;
  ${({ theme }) => (theme as any).breakpoints.up("md")} {
    padding-left: 60px;
    padding-right: 60px;
  }
`;

const HeaderSection = styled.div`
  display: flex;
`;

const StyledHeader = styled.h1`
  text-align: right;
  line-height: 1;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  border-radius: 3px;
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

const StyledP = styled.h6`
  max-width: 50ch;
`;

const StyledTitle = styled.h3`
  max-width: 20ch;
`;

const ProjectPage = () => {
  const {
    projectStore: { selectedProject, setSelectedProject, getProjectFromSlug },
  } = useStores();

  const { slug } = useParams();

  const theme = useTheme();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    if (!selectedProject && slug) {
      const project = getProjectFromSlug(slug);
      project?.id && setSelectedProject(project?.id);
    }
  }, [getProjectFromSlug, selectedProject, setSelectedProject, slug]);

  return (
    <ProjectPageContainer>
      <HeaderSection>
        {!isSmallScreen && (
          <Stack flex={1} justifyContent={"flex-end"}>
            <LittleArrow />
          </Stack>
        )}
        <Stack gap={"20px"} flex={1}>
          <StyledHeader>{selectedProject?.name}</StyledHeader>
          <Image src={"/images/project-square.png"} />
        </Stack>
      </HeaderSection>
      {isSmallScreen ? <Spacer /> : <SectionDivider />}

      <Stack alignItems={"flex-start"}>
        <StyledTitle>
          a web application for discovering local music gigs.
        </StyledTitle>
        <Spacer />
        <StyledP>
          maybe i could have a little bit of text here to fill out the space.
          could be a nice little morsel of text about me. little quirky facts.
          fun facts. but also serious facts. very professional serious facts.
        </StyledP>
        <Spacer />
        <Spacer />
        <Button
          onClick={() => {
            alert("Not implemented");
          }}
        >
          <Stack direction={"row"} columnGap={2} alignItems={"center"}>
            <h5> View Project</h5>
            <OpenNewArrow />
          </Stack>
        </Button>
        <SectionDivider />
      </Stack>

      <ProjectSectionText number="01" title="project overview">
        maybe i could have a little bit of text here to fill out the space.
        could be a nice little morsel of text about me. little quirky facts. fun
        facts. but also serious facts. very professional serious facts.
      </ProjectSectionText>

      <Spacer />
      <Image src={"/images/gigpit.png"} />
      <SectionDivider />

      <ProjectSectionText number="02" title="goals">
        maybe i could have a little bit of text here to fill out the space.
        could be a nice little morsel of text about me. little quirky facts. fun
        facts. but also serious facts. very professional serious facts.
      </ProjectSectionText>

      <Spacer />
      <Image src={"/images/gigpit.png"} />
      <SectionDivider />

      <ProjectSectionText number="03" title="process">
        maybe i could have a little bit of text here to fill out the space.
        could be a nice little morsel of text about me. little quirky facts. fun
        facts. but also serious facts. very professional serious facts.
      </ProjectSectionText>

      <Spacer />

      <Stack gap={1}>
        <Stack direction={"row"} gap={1}>
          <SmallImage src={"/images/project-square.png"} />
          <SmallImage src={"/images/project-square.png"} />
        </Stack>

        <Image src={"/images/gigpit.png"} />
      </Stack>
      <SectionDivider />

      <ProjectSectionText number="04" title="outcomes" hasButton>
        maybe i could have a little bit of text here to fill out the space.
        could be a nice little morsel of text about me. little quirky facts. fun
        facts. but also serious facts. very professional serious facts.
      </ProjectSectionText>

      <Spacer />

      <Image src={"/images/gigpit.png"} />
      <SectionDivider />
    </ProjectPageContainer>
  );
};

export default observer(ProjectPage);
