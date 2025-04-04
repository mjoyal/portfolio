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
      <p>
        <Bracket>{"["}</Bracket>
        {number}
        <Bracket>{"]"}</Bracket>
      </p>
      <p>{title}</p>
    </Stack>
  );
};

export default ProjectSectionLabel;
