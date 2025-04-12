import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  gap: 40px;
  width: 300px;
  ${({ theme }) => (theme as any).breakpoints.up("md")} {
    width: 350px;
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
      <h6>{number}</h6>
      <h6>{listItem}</h6>
    </Container>
  );
};

export default NumberedListItem;
