import styled from "@emotion/styled";
import EmailMeButton from "../EmailMeButton";
import InfiniteMarquee from "./InfinityMarquee";

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
  border-bottom: 1px solid white;
  margin-bottom: 24px;
  padding-top: 48px;
  ${({ theme }) => (theme as any).breakpoints.up("md")} {
    margin-bottom: 44px;
  }
`;

const StyledText = styled.h6`
  margin-right: 20px;
`;

const StyledHeader = styled.h3`
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
        <EmailMeButton />
      </TopContainer>

      <BottomContainer>
        <StyledText>mackenzie.joyal@gmail.com</StyledText>
        <InfiniteMarquee />
      </BottomContainer>
    </FooterContainer>
  );
};

export default Footer;
