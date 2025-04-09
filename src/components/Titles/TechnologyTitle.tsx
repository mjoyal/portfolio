import styled from "@emotion/styled";

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  position: absolute;
`;

const TechnologyTitle = () => {
  return (
    <Container>
      <svg
        width="380"
        height="100"
        viewBox="0 0 391 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M389.624 83.1766C390.471 77.3007 386.33 70.6791 377.308 63.6848C368.357 56.7462 354.908 49.6873 337.919 42.9255C303.957 29.4079 256.059 17.1604 202.284 9.40824C148.509 1.65607 99.102 -0.123737 62.7041 3.25078C44.497 4.93879 29.602 7.91166 19.0559 12.0396C8.4253 16.2007 2.58338 21.3834 1.73632 27.2592C0.88926 33.1351 5.02949 39.7568 14.052 46.751C23.0027 53.6897 36.4516 60.7485 53.4405 67.5104C87.4033 81.028 135.301 93.2754 189.076 101.028C242.851 108.78 292.258 110.56 328.656 107.185C346.863 105.497 361.758 102.524 372.304 98.3962C382.935 94.2351 388.777 89.0525 389.624 83.1766Z"
          stroke="#A0C7FF"
          stroke-width="1.5"
        />
      </svg>

      <Title>tech</Title>
    </Container>
  );
};

export default TechnologyTitle;
