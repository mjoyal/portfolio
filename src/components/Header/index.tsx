import styled from "@emotion/styled";

export enum HeaderTypes {
  H1 = "H1",
  H2 = "H2",
  H3 = "H3",
  H4 = "H4",
  H5 = "H5",
  H6 = "H6",
}

interface IStyledTextTypesProps {
  children: any;
  type: HeaderTypes;
}

const StyledHeader = styled.p<IStyledTextTypesProps>`
  font-weight: 500;
  padding: 0;
  margin: 0;
  color: ${({ theme }) => (theme as any).palette.text.primary};
`;

interface IHeaderProps {
  children: any;
  type: HeaderTypes;
}

const Header = (props: IHeaderProps) => {
  const { children, type } = props;

  return <StyledHeader type={type}>{children}</StyledHeader>;
};

export default Header;
