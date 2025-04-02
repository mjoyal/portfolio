import styled from "@emotion/styled";
import { Stack } from "@mui/material";
import BodyText, { TextTypes } from "src/components/BodyText";

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
    <Stack>
      <BodyText type={TextTypes.BODY}>
        <Bracket>{"["}</Bracket>
        {number}
        <Bracket>{"]"}</Bracket>
      </BodyText>
      <BodyText type={TextTypes.BODY}>{title}</BodyText>
    </Stack>
  );
};

export default ProjectSectionLabel;
