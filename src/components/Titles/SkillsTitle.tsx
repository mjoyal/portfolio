import styled from "@emotion/styled";
import { useTheme, useMediaQuery } from "@mui/material";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  position: absolute;
`;

const SkillsTitle = () => {
  const theme = useTheme();

  const isSmall = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Container>
      <svg
        fill="none"
        height="132"
        viewBox="0 0 464 132"
        width={isSmall ? 300 : 400}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m463.042 20.6942c-.609-3.1124-2.746-5.9036-6.371-8.3541-3.627-2.45161-8.702-4.5325-15.091-6.22628-12.776-3.38692-30.69-5.197437-52.472-5.405518-43.555-.416085-102.465 5.575278-166.4 18.079198-63.935 12.5038-120.762 29.1473-160.9516 45.9414-20.0986 8.3987-36.0113 16.8249-46.5695 24.7753-5.28006 3.9758-9.19765 7.8155-11.63367 11.4528-2.43492 3.636-3.362911 7.026-2.754204 10.139.608704 3.112 2.745704 5.903 6.370904 8.354 3.62687 2.452 8.70227 4.532 15.09117 6.226 12.7754 3.387 30.6902 5.198 52.472 5.406 43.5549.416 102.4649-5.576 166.3999-18.079 63.935-12.504 120.762-29.1478 160.952-45.9419 20.098-8.3987 36.011-16.8249 46.569-24.7752 5.28-3.9759 9.198-7.8156 11.634-11.4529 2.435-3.6356 3.363-7.0263 2.754-10.1388z"
          stroke="#A0C7FF"
          strokeWidth={2}
        />
      </svg>

      <Title>skills</Title>
    </Container>
  );
};

export default SkillsTitle;
