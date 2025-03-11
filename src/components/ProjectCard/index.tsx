import styled from "@emotion/styled";
import BodyText, { TextTypes } from "../BodyText";

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
        <BodyText type={TextTypes.LABEL}>{name}</BodyText>
        <BodyText type={TextTypes.BODY_MEDIUM}>{role}</BodyText>
      </LabelContainer>
    </Container>
  );
};

export default ProjectCard;
