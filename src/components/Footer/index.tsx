import styled from "@emotion/styled";
import EmailMeButton from "../EmailMeButton";
import InfiniteMarquee from "./InfinityMarquee";
import Button from "../Button";
import { Stack } from "@mui/material";

const FooterContainer = styled.div`
  max-width: 100vw;
  margin-top: 32px;
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: clamp(20px, 4vw, 48px);
  padding-right: clamp(20px, 4vw, 48px);
  gap: 40px;
  ${({ theme }) => (theme as any).breakpoints.up("md")} {
    gap: 68px;
  }
`;

const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-top: 48px;
  margin-bottom: 28px;
  ${({ theme }) => (theme as any).breakpoints.up("md")} {
    margin-bottom: 44px;
  }
`;

const StyledText = styled.h6`
  margin-right: 20px;
`;

const StyledHeader = styled.h3`
  line-height: 1.25;
  text-align: left;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <TopContainer>
        <StyledHeader>
          Ready to get in <br />
          touch?
        </StyledHeader>
        <Stack direction={"row"} gap={3}>
          <EmailMeButton />
          <Button isTextButton onClick={() => alert("not implemented")}>
            Download my resume
          </Button>
        </Stack>
      </TopContainer>

      <BottomContainer>
        <StyledText>mackenzie.joyal@gmail.com</StyledText>
        <InfiniteMarquee />
      </BottomContainer>
    </FooterContainer>
  );
};

export default Footer;
