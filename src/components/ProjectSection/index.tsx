import styled from "@emotion/styled";
import ProjectCard from "../ProjectCard";

const ProjectContainer = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
`;

const Title = styled.h2`
  font-size: 14vw;
  letter-spacing: -0.05em;
`;

// TODO: Add image alts

const ProjectSection = () => {
  return (
    <>
      <Title>projects</Title>
      <ProjectContainer>
        <ProjectCard
          name="Gigpit"
          role="UI/UX Design & UI Development"
          imageSource={"/images/gigpit.png"}
        />
      </ProjectContainer>
    </>
  );
};

export default ProjectSection;
