import styled from "@emotion/styled";
import ProjectCard from "../ProjectCard";

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-top: 100px;
  padding-bottom: 100px;
`;

const ProjectSectionContainer = styled.div``;

// TODO: Add image alts

const ProjectSection = () => {
  return (
    <ProjectSectionContainer>
      <h1>projects</h1>
      <ProjectContainer>
        <ProjectCard
          name="gigpit"
          role="ui/ux design & ui development"
          imageSource={"/images/gigpit.png"}
        />

        <ProjectCard
          name="fit52"
          role="software engineer & ui/ux"
          imageSource={"/images/fit52.png"}
        />

        <ProjectCard
          name="crewlywed"
          role="engineering & ui/ux"
          imageSource={"/images/crewlywed.png"}
        />
      </ProjectContainer>
    </ProjectSectionContainer>
  );
};

export default ProjectSection;
