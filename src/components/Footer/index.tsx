import styled from "@emotion/styled";
import EmailMeButton from "../EmailMeButton";
import Button from "../Button";
import { Stack } from "@mui/material";

const Title = styled.h1`
  font-size: 12rem;
  letter-spacing: -5px;
  font-weight: 500;
  line-height: 0.75;
  text-align: center;
`;

const Footer = () => {
  return (
    <Stack
      alignItems={"center"}
      paddingBottom={{ xs: 5, md: 10 }}
      gap={{ xs: 2, md: 5 }}
    >
      <Title>Let's Talk.</Title>
      <Stack direction={"row"}>
        <Button
          href="/assets/mackenzie-joyal-resume-2025.pdf"
          isDownload
          isTextButton
          isSmall
        >
          Resume
        </Button>

        <EmailMeButton isTextButton isShortText={true} />
        <Button
          isTextButton
          isSmall
          href="https://www.linkedin.com/in/mackenziejoyal"
        >
          LinkedIn
        </Button>
      </Stack>
    </Stack>
  );
};

export default Footer;
