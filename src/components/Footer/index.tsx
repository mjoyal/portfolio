import styled from "@emotion/styled";
import EmailMeButton from "../EmailMeButton";
import InfiniteMarquee from "./InfinityMarquee";
import Button from "../Button";
import { Stack } from "@mui/material";

const FooterContainer = styled.div`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
  padding-top: 48px;
  margin-bottom: 28px;
  ${({ theme }) => (theme as any).breakpoints.up("md")} {
    margin-bottom: 44px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <InfiniteMarquee />
      <Stack direction={"row"}>
        <Button isTextButton onClick={() => alert("not implemented")}>
          Download my resume
        </Button>
        <EmailMeButton isTextButton />
        <Button isTextButton href="https://www.linkedin.com/in/mackenziejoyal">
          LinkedIn
        </Button>
      </Stack>
    </FooterContainer>
  );
};

export default Footer;
