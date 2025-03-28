import styled from "@emotion/styled";

export enum TextTypes {
  BODY = "BODY",
  BODY_MEDIUM = "BODY_MEDIUM",
  BODY_LARGE = "BODY_LARGE",
  LABEL = "LABEL",
}

interface IStyledTextTypesProps {
  children: any;
  type: TextTypes;
}

const StyledText = styled.p<IStyledTextTypesProps>`
  font-size: ${({ type }) => {
    if (type === TextTypes.BODY) {
      return "1.5rem";
    }

    if (type === TextTypes.BODY_LARGE) {
      return "2.5rem";
    }

    return "1.5rem";
  }};
  font-weight: ${({ type }) => (type === TextTypes.LABEL ? 500 : 300)};
  padding: 0;
  margin: 0;
  color: ${({ theme }) => (theme as any).palette.text.primary};
`;

interface ITextTypesProps {
  children: any;
  type: TextTypes;
}

const BodyText = (props: ITextTypesProps) => {
  const { children, type } = props;

  return <StyledText type={type}>{children}</StyledText>;
};

export default BodyText;
