import styled from "@emotion/styled";
import { useTheme, useMediaQuery } from "@mui/material";

const Container = styled.div`
  position: relative;
  height: 200px; /* set a height */
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme }) => (theme as any).breakpoints.up("md")} {
    justify-content: flex-start;
  }
`;

const Title = styled.h1`
  position: absolute;
`;

const ProjectsTitle = () => {
  const theme = useTheme();

  const isSmall = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Container>
      <svg
        width={isSmall ? 300 : 600}
        height="89"
        viewBox="0 0 365 89"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M363.617 11.3972C363.287 9.58662 361.817 7.93611 359.104 6.49088C356.401 5.05042 352.554 3.86443 347.661 2.94546C337.881 1.10857 324.047 0.360282 307.145 0.691102C273.35 1.3526 227.384 6.32598 177.261 15.4585C127.137 24.591 82.3706 36.1494 50.5141 47.4498C34.582 53.1013 21.9011 58.6806 13.3973 63.8488C9.14292 66.4345 5.96099 68.9012 3.93937 71.2026C1.91107 73.5116 1.11721 75.5746 1.4471 77.3852C1.77699 79.1958 3.24747 80.8463 5.95979 82.2915C8.66317 83.732 12.5106 84.918 17.4035 85.8369C27.1837 87.6738 41.0175 88.4221 57.919 88.0913C91.714 87.4298 137.681 82.4564 187.804 73.3239C237.927 64.1914 282.694 52.633 314.55 41.3326C330.482 35.6811 343.163 30.1018 351.667 24.9335C355.921 22.3479 359.103 19.8812 361.125 17.5798C363.153 15.2708 363.947 13.2077 363.617 11.3972Z"
          stroke="#E6F187"
          strokeWidth={1.5}
        />
      </svg>

      <Title>work</Title>
    </Container>
  );
};

export default ProjectsTitle;
