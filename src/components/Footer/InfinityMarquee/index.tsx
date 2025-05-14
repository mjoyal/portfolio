import styled from "@emotion/styled";

const Wrapper = styled.div`
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
`;

const Scroller = styled.div`
  display: inline-flex;
  animation: scroll 150s linear infinite;

  @keyframes scroll {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;

const Asterisk = styled.span`
  font-size: 0.7em;
  vertical-align: middle;
  color: ${({ theme }) => (theme as any).palette.text.secondary};
`;

const StyledHeader = styled.h1`
  font-size: 10rem;
  font-weight: 500;
`;

// const marqueeText = " let’s talk ✻ let’s talk ✻ let’s talk ✻ ";

const InfiniteMarquee = () => {
  const marqueeText = Array.from({ length: 30 }, (_, i) => (
    <span key={i}>
      say hi! <Asterisk>*</Asterisk>{" "}
    </span>
  ));

  return (
    <Wrapper>
      <Scroller>
        <StyledHeader>{marqueeText}</StyledHeader>
      </Scroller>
    </Wrapper>
  );
};

export default InfiniteMarquee;
