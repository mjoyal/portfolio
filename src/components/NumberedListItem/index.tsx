import styled from "@emotion/styled";
import BodyText, { TextTypes } from "../BodyText";

const Container = styled.div`
  display: flex;
  gap: 40px;
  ${({ theme }) => (theme as any).breakpoints.up("md")} {
    gap: 80px;
  }
`;

interface INumberedListItemProps {
  number: string;
  listItem: string;
}
const NumberedListItem = (props: INumberedListItemProps) => {
  const { number, listItem } = props;

  return (
    <Container>
      <BodyText type={TextTypes.BODY_LARGE}>{number}</BodyText>
      <BodyText type={TextTypes.BODY_LARGE}>{listItem}</BodyText>
    </Container>
  );
};

export default NumberedListItem;
