import styled from "@emotion/styled";
import { Stack } from "@mui/material";
import { observer } from "mobx-react";
import ProjectSectionLabel from "../ProjectSectionLabel";
import OpenNewArrow from "src/icons/OpenNewArrow";
import Button from "src/components/Button";

const StyledP = styled.p`
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
    <Stack flexDirection={"row"} gap={3}>
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
              <h5> View Project</h5>
              <OpenNewArrow />
            </Stack>
          </Button>
        )}
      </Stack>
    </Stack>
  );
};

export default observer(ProjectSectionText);
