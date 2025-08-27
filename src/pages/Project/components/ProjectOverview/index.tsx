import { Stack } from "@mui/material";
import styled from "@emotion/styled";
import Spacer from "src/components/Spacer";
import { StyledP } from "..";
import LinkArrow from "src/icons/LinkArrow";

const PageTitle = styled.h2`
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
  linkText: string;
  url: string;
  date: string;
}

const ProjectOverview = (props: IProjectOverviewProps) => {
  const { project, title, paragraphs, collaborators, linkText, url, date } =
    props;
  return (
    <Stack maxWidth={"100%"}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent={"space-between"}
        maxWidth={"100%"}
      >
        <h5>{project}</h5>
        <Stack
          direction={"row"}
          justifyContent={{ xs: "space-between" }}
          gap={10}
        >
          <h6>{date}</h6>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <Stack direction={"row"} gap={1} alignItems={"center"}>
              <h6>{linkText}</h6>
              <LinkArrow />
            </Stack>
          </a>
        </Stack>
      </Stack>

      <Stack
        alignItems={"flex-start"}
        gap={3}
        borderTop="1px solid rgba(245, 245, 245, 0.75)"
        maxWidth={"100%"}
      >
        <Spacer />
        <PageTitle>{title}</PageTitle>

        <Stack
          direction={{ sm: "column", lg: "row" }}
          gap={{ xs: 5, md: 10 }}
          maxWidth={"100%"}
        >
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
