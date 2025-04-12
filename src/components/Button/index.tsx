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
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => (theme as any).palette.primary.main};
    color: #0a0a0c;
    // box-shadow: 0 0 8px #a3bffa;
  }
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
