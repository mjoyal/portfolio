import styled from "@emotion/styled";
import { Stack } from "@mui/material";
import { observer } from "mobx-react";
import ProjectSectionLabel from "../ProjectSectionLabel";
import Button from "src/components/Button";

const StyledP = styled.h6`
  max-width: 40ch;
`;

interface IProjectSectionLabelProps {
  number: string;
  title: string;
  children: string;
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

      <Stack alignItems={"flex-start"} gap={2}>
        <StyledP>{children}</StyledP>
        {hasButton && (
          <Button
            onClick={() => {
              alert("Not implemented");
            }}
          >
            <Stack direction={"row"} columnGap={2} alignItems={"center"}>
              <h5>Download my resume</h5>
            </Stack>
          </Button>
        )}
      </Stack>
    </Stack>
  );
};

export default observer(ProjectSectionText);
