import styled from "@emotion/styled";
import { Stack } from "@mui/material";
import { observer } from "mobx-react";
import ProjectSectionLabel from "../ProjectSectionLabel";
import Button from "src/components/Button";

const StyledP = styled.p`
  max-width: 70ch;
`;

interface IProjectSectionLabelProps {
  number: string;
  title: string;
  children: any;
  hasButton?: boolean;
}
const ProjectSectionText = (props: IProjectSectionLabelProps) => {
  const { number, title, children, hasButton } = props;

  return (
    <Stack
      flexDirection={{ md: "row", xs: "column" }}
      justifyContent={"space-between"}
      gap={3}
    >
      <ProjectSectionLabel number={number} title={title} />

      <Stack alignItems={"flex-start"} gap={4}>
        <StyledP>{children}</StyledP>
        {hasButton && (
          <Button
            onClick={() => {
              alert("Not implemented");
            }}
          >
            View Project
          </Button>
        )}
      </Stack>
    </Stack>
  );
};

export default observer(ProjectSectionText);
