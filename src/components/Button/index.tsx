import styled from "@emotion/styled";

const StyledButton = styled.button<{
  isTextButton?: boolean;
  isSmall?: boolean;
}>`
  border: ${({ theme, isTextButton }) =>
    isTextButton
      ? "0px"
      : `1.5px solid ${(theme as any).palette.primary.main}`};
  color: ${({ theme }) => (theme as any).palette.text.primary};
  border-radius: 100px;
  font-weight: 500;
  padding: ${({ isSmall }) => (isSmall ? "8px 30px" : "10px 40px")};
  font-size: ${({ isSmall }) => (isSmall ? "1.375rem" : "1.5rem")};
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
  &:hover {
    background-color: ${({ theme, isTextButton }) =>
      isTextButton ? "" : (theme as any).palette.primary.main};
    color: ${({ theme, isTextButton }) =>
      isTextButton
        ? (theme as any).palette.text.secondary
        : (theme as any).palette.text.contrast};
  }
  cursor: pointer;
`;

// box-shadow: ${({ isTextButton }) =>
//   isTextButton ? "" : "0 0 8px #a3bffa"};

interface IButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  href?: string;
  isTextButton?: boolean;
  isSmall?: boolean;
  isDownload?: boolean;
}

const StyledLink = StyledButton.withComponent("a");

const Button = (props: IButtonProps) => {
  const {
    onClick,
    children,
    isTextButton,
    href,
    isSmall = false,
    isDownload = false,
    ...rest
  } = props;

  return !!href ? (
    <StyledLink
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      isTextButton={isTextButton}
      isSmall={isSmall}
      download={isDownload}
      {...rest}
    >
      {children}
    </StyledLink>
  ) : (
    <StyledButton
      onClick={onClick}
      isTextButton={isTextButton}
      isSmall={isSmall}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
