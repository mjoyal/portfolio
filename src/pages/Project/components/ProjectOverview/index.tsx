import { Stack } from "@mui/material";
import styled from "@emotion/styled";
import Spacer from "src/components/Spacer";
import { StyledP } from "..";

const PageTitle = styled.h3`
  max-width: 700px;
`;

const CollaboratorsTitle = styled.p`
  font-size: 0.875rem;
  letter-spacing: 2.2px;
  font-weight: 600;
`;

const CollaboratorsText = styled.p`
  font-size: 1rem;
`;

interface IProjectOverviewProps {
  project: string;
  title: string;
  paragraphs: string[];
  collaborators?: string;
  url: string;
  date: string;
}

const ProjectOverview = (props: IProjectOverviewProps) => {
  const { project, title, paragraphs, collaborators, url, date } = props;
  return (
    <Stack>
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent={"space-between"}
      >
        <h6>{project}</h6>
        <Stack direction={"row"} gap={10}>
          <h6>{date}</h6>
          <h6>{url}</h6>
        </Stack>
      </Stack>

      <Stack
        alignItems={"flex-start"}
        gap={3}
        borderTop="1px solid rgba(245, 245, 245, 0.75)"
      >
        <Spacer />
        <PageTitle>{title}</PageTitle>

        <Stack direction={{ sm: "column", lg: "row" }} gap={{ xs: 5, md: 10 }}>
          <StyledP>{paragraphs[0]}</StyledP>
          <StyledP>{paragraphs[1]}</StyledP>
        </Stack>

        {!!collaborators && (
          <Stack>
            <Spacer level={5} />
            <CollaboratorsTitle>COLLABORATORS</CollaboratorsTitle>
            <CollaboratorsText>{collaborators}</CollaboratorsText>
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};

export default ProjectOverview;
