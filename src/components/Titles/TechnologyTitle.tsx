import styled from "@emotion/styled";
import { useTheme, useMediaQuery } from "@mui/material";

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
  const theme = useTheme();

  const isSmall = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container>
      <svg
        width={isSmall ? 300 : 650}
        height="136"
        viewBox="0 0 699 136"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M697.647 110.657C698.048 107.383 696.256 103.761 692.087 99.8226C687.936 95.9015 681.561 91.797 673.147 87.5823C656.327 79.1572 631.528 70.3744 600.56 61.7513C538.636 44.5082 452.173 27.9389 355.855 16.1373C259.537 4.33566 171.632 -0.459778 107.376 1.32285C75.2425 2.21432 49.0569 4.75022 30.7004 8.86522C21.5174 10.9238 14.3398 13.3677 9.36522 16.1707C4.3691 18.9858 1.75536 22.0682 1.35422 25.3421C0.953092 28.6159 2.74533 32.2382 6.91401 36.1762C11.0647 40.0973 17.4399 44.2018 25.8543 48.4165C42.6743 56.8416 67.4731 65.6245 98.4409 74.2476C160.365 91.4906 246.828 108.06 343.146 119.862C439.464 131.663 527.37 136.459 591.625 134.676C623.759 133.784 649.944 131.249 668.301 127.134C677.484 125.075 684.661 122.631 689.636 119.828C694.632 117.013 697.246 113.931 697.647 110.657Z"
          stroke="#E6F187"
          strokeWidth={2}
        />
      </svg>

      <Title>{isSmall ? "tech" : "technology"}</Title>
    </Container>
  );
};

export default TechnologyTitle;
