import styled from "@emotion/styled";

interface IButtonProps {
  onClick: any;
  children: any;
}

const StyledButton = styled.button`
  border: ${({ theme }) =>
    `1.5px solid ${(theme as any).palette.primary.main}`};
  color: ${({ theme }) => (theme as any).palette.text.primary};
  border-radius: 100px;

  font-weight: 600;
  padding: 10px 40px;
  font-size: 1.5rem;
`;

const Button = (props: IButtonProps) => {
  const { onClick, children, ...rest } = props;
  return (
    <StyledButton onClick={onClick} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
