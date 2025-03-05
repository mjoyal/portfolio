import styled from "@emotion/styled";

const ProjectContainer = styled.div`
  background-color: white;
  width 100%;
  height: 500px; 
`;

const Title = styled.h2`
  font-size: 14vw;
  letter-spacing: -0.05em;
`;

const ProjectSection = () => {
  return (
    <>
      <Title>projects</Title>
      <ProjectContainer></ProjectContainer>
    </>
  );
};

export default ProjectSection;
