import styled from "@emotion/styled";
import EmailMeButton from "../EmailMeButton";
import InfiniteMarquee from "./InfinityMarquee";
import Button from "../Button";
import { Stack } from "@mui/material";

const FooterContainer = styled(Stack)`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
  margin-bottom: 32px;
`;

const Footer = () => {
  return (
    <FooterContainer alignItems={{ xs: "center", sm: "flex-end" }}>
      <InfiniteMarquee />
      <Stack direction={{ xs: "column", sm: "row" }}>
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
