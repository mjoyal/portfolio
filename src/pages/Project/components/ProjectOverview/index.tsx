import { Stack } from "@mui/material";
import styled from "@emotion/styled";
import Spacer from "src/components/Spacer";
import { StyledP } from "..";

const PageTitle = styled.h2`
  max-width: 700px;
`;

const CollaboratorsTitle = styled.p`
  font-size: 0.875rem;
  letter-spacing: 2px;
`;

const CollaboratorsText = styled.p`
  font-size: 1rem;
`;

interface IProjectOverviewProps {
  project: string;
  title: string;
  paragraphs: string[];
  collaborators: string;
  url: string;
  date: string;
}

const ProjectOverview = (props: IProjectOverviewProps) => {
  const { project, title, paragraphs, collaborators, url, date } = props;
  return (
    <Stack>
      <Stack direction="row" justifyContent={"space-between"}>
        <Stack direction={"row"} gap={20}>
          <p>{project}</p>
          <p>{date}</p>
        </Stack>
        <p>{url}</p>
      </Stack>

      <Stack
        alignItems={"flex-start"}
        gap={3}
        borderTop="1px solid rgba(245, 245, 245, 0.75)"
      >
        <Spacer />
        <PageTitle>{title}</PageTitle>
        <Stack direction={{ sm: "column", lg: "row" }} gap={{ sm: 5, md: 10 }}>
          <StyledP>{paragraphs[0]}</StyledP>
          <StyledP>{paragraphs[1]}</StyledP>
        </Stack>
        <Spacer level={1} />
        <Stack>
          <CollaboratorsTitle>COLLABORATORS</CollaboratorsTitle>
          <CollaboratorsText>{collaborators}</CollaboratorsText>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ProjectOverview;
