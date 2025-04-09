import styled from "@emotion/styled";

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme }) => (theme as any).breakpoints.up("md")} {
    justify-content: flex-start;
  }
`;

const Title = styled.h1`
  font-size: 9rem;
  position: absolute;
  line-height: 0.8;
  bottom: 10px;
`;

const ProjectsTitle = () => {
  return (
    <Container>
      <svg
        fill="none"
        height="132"
        viewBox="0 0 464 132"
        width={330}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m462.551 20.7902c-.574-2.9389-2.601-5.6301-6.16-8.0359-3.562-2.408-8.578-4.47084-14.939-6.15717-12.717-3.37142-30.584-5.18093-52.349-5.38885-43.512-.415672-102.387 5.57047-166.299 18.06992-63.913 12.4994-120.705 29.1345-160.8548 45.9121-20.0827 8.392-35.9517 16.7994-46.4615 24.7133-5.2569 3.9584-9.12629 7.759-11.51903 11.3314-2.39055 3.57-3.25371 6.826-2.67894 9.765s2.60107 5.63 6.16021 8.036c3.56236 2.408 8.57856 4.471 14.93926 6.157 12.717 3.371 30.5841 5.181 52.3487 5.389 43.5121.415 102.3871-5.571 166.2991-18.07 63.913-12.5 120.705-29.1346 160.855-45.9122 20.082-8.3921 35.951-16.7994 46.461-24.7133 5.257-3.9584 9.127-7.759 11.519-11.3317 2.391-3.5694 3.254-6.8257 2.679-9.7646z"
          stroke="#a0c7ff"
          stroke-width="1.5"
        />
      </svg>

      <Title>work</Title>
    </Container>
  );
};

export default ProjectsTitle;
