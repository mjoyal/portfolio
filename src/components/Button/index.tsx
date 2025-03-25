import styled from "@emotion/styled";

interface IButtonProps {
  onClick: any;
  label: string;
}

const StyledButton = styled.button`
  background-color: ${({ theme }) => (theme as any).palette.background.default};
  border: ${({ theme }) => `1px solid ${(theme as any).palette.primary.main}`};
  color: ${({ theme }) => (theme as any).palette.text.primary};
  border-radius: 100px;
  font-family: "Degular", sans-serif;
  font-weight: 400;
  padding: 0.75rem 2.5rem;
  font-size: 1.5rem;
  cursor: pointer;
`;

const Button = (props: IButtonProps) => {
  const { onClick, label } = props;
  return <StyledButton onClick={onClick}>{label}</StyledButton>;
};

export default Button;
