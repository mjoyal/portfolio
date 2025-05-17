import { Stack } from "@mui/material";
import styled from "@emotion/styled";
import Spacer from "src/components/Spacer";
import { StyledP } from "..";

const PageTitle = styled.h2`
  max-width: 850px;
`;

const CollaboratorsTitle = styled.p`
  font-size: 0.875rem;
  letter-spacing: 2px;
`;

const StyledBioText = styled.p`
  font-size: 1.15rem;
  max-width: 400px;
`;

const CollaboratorsText = styled.p``;

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
      <Stack direction="row" justifyContent={"space-between"}>
        <p>{project}</p>
        <Stack direction={"row"} gap={10}>
          <p>{date}</p>
          <p>{url}</p>
        </Stack>
      </Stack>

      <Stack
        alignItems={"flex-start"}
        gap={3}
        borderTop="1px solid rgba(245, 245, 245, 0.75)"
      >
        <Spacer />
        <PageTitle>{title}</PageTitle>

        <Stack direction={{ sm: "column", lg: "row" }} gap={{ sm: 5, md: 10 }}>
          <StyledBioText>{paragraphs[0]}</StyledBioText>
          <StyledBioText>{paragraphs[1]}</StyledBioText>
        </Stack>

        {!!collaborators && (
          <Stack>
            <CollaboratorsTitle>COLLABORATORS</CollaboratorsTitle>
            <CollaboratorsText>{collaborators}</CollaboratorsText>
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};

export default ProjectOverview;
