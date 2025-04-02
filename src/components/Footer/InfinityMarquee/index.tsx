import styled from "@emotion/styled";

const Wrapper = styled.div`
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
`;

const Scroller = styled.div`
  display: inline-flex;
  animation: scroll 40s linear infinite;

  @keyframes scroll {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;

const marqueeText = " let’s talk ✻ let’s talk ✻ let’s talk ✻ ";

const InfiniteMarquee = () => {
  return (
    <Wrapper>
      <Scroller>
        <h2>{marqueeText.repeat(10)}</h2>
      </Scroller>
    </Wrapper>
  );
};

export default InfiniteMarquee;
