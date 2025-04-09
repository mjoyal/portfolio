import styled from "@emotion/styled";
import { Stack } from "@mui/material";

const Bracket = styled.span`
  color: ${({ theme }) => (theme as any).palette.text.secondary};
`;

interface IProjectSectionLabelProps {
  number: string;
  title: string;
}
const ProjectSectionLabel = (props: IProjectSectionLabelProps) => {
  const { number, title } = props;

  return (
    <Stack paddingTop={"8px"}>
      {/*8px padding to align with headings on project page*/}
      <h5>
        <Bracket>{"["}</Bracket>
        {number}
        <Bracket>{"]"}</Bracket>
      </h5>
      <h5>{title}</h5>
    </Stack>
  );
};

export default ProjectSectionLabel;
