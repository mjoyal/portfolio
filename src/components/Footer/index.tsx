import styled from "@emotion/styled";
import EmailMeButton from "../EmailMeButton";
import InfiniteMarquee from "./InfinityMarquee";
import Button from "../Button";
import { Box, Stack, useMediaQuery, useTheme } from "@mui/material";

const FooterContainer = styled(Stack)<{ isMobile?: boolean }>`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
  margin-bottom: 32px;
  background-color: ${({ isMobile }) => (isMobile ? "black" : "transparent")};
  padding-top: ${({ isMobile }) => (isMobile ? "40px" : "0px")};
  border-top: ${({ isMobile }) =>
    isMobile ? "  1px solid rgba(255, 255, 255, 0.2);" : "0px"};
`;

const MobileButton = styled(Button)`
  padding: 0;
  text-align: left;
  border-radius: 0;
  padding-top: 10px;
  margin-top: -10px;
  padding-bottom: 10px;
  padding-right: 20px;
  padding-left: 20px;
  margin-left: -20px;
`;

const MobileEmailButton = styled(EmailMeButton)`
  padding: 0;
  text-align: left;
  border-radius: 0;
  padding-top: 10px;
  margin-top: -10px;
  padding-bottom: 10px;
  padding-right: 20px;
  padding-left: 20px;
  margin-left: -20px;
`;

const Footer = () => {
  const theme = useTheme();

  const isBelowMedium = useMediaQuery(theme.breakpoints.down("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <FooterContainer
      alignItems={{ xs: "flex-start", sm: "flex-end" }}
      isMobile={isMobile}
    >
      {isMobile && (
        <Stack pl={"16px"} gap={3}>
          <Box textAlign={"left"}>
            <h6>Still Curious?</h6>
            <MobileButton isTextButton onClick={() => alert("not implemented")}>
              Download my resume
            </MobileButton>
          </Box>
          <Box textAlign={"left"}>
            <h6>Want to stay in touch?</h6>
            <MobileButton
              isTextButton
              href="https://www.linkedin.com/in/mackenziejoyal"
            >
              Connect with me on LinkedIn
            </MobileButton>
          </Box>
          <Box textAlign={"left"}>
            <h6>Need to reach me?</h6>
            <MobileEmailButton isTextButton />
          </Box>
        </Stack>
      )}
      <InfiniteMarquee />

      {!isMobile && (
        <Stack direction={"row"}>
          <Button isTextButton onClick={() => alert("not implemented")}>
            {isBelowMedium ? "Resume" : "Download my resume"}
          </Button>

          <EmailMeButton isTextButton isShortText={isBelowMedium} />
          <Button
            isTextButton
            href="https://www.linkedin.com/in/mackenziejoyal"
          >
            LinkedIn
          </Button>
        </Stack>
      )}
    </FooterContainer>
  );
};

export default Footer;
