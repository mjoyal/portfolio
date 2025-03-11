import styled from "@emotion/styled";

const Container = styled.div``;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const LabelContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

const NameLabel = styled.p`
  font-weight: 600;
`;

const RoleLabel = styled.p``;

interface IProjectCardProps {
  imageSource: any;
  imageAlt?: string;
  name: string;
  role: string;
}

const ProjectCard = (props: IProjectCardProps) => {
  const { imageSource, imageAlt, name, role } = props;

  return (
    <Container>
      <Image src={imageSource} alt={imageAlt} />
      <LabelContainer>
        <NameLabel>{name}</NameLabel>
        <RoleLabel>{role}</RoleLabel>
      </LabelContainer>
    </Container>
  );
};

export default ProjectCard;
