import styled from "@emotion/styled";
import BodyText, { TextTypes } from "../BodyText";
import { useNavigate } from "react-router-dom";

const ButtonContainer = styled.button`
  border: 0px;
  background-color: transparent;
  cursor: pointer;
`;

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
  name: string;
  slug: string;
  role: string;
  imageSource: any;
  imageAlt?: string;
}

const ProjectCard = (props: IProjectCardProps) => {
  const { slug, name, role, imageSource, imageAlt } = props;

  const navigate = useNavigate();

  return (
    <ButtonContainer onClick={() => navigate(slug)}>
      <Image src={imageSource} alt={imageAlt} />
      <LabelContainer>
        <BodyText type={TextTypes.LABEL}>{name}</BodyText>
        <BodyText type={TextTypes.BODY_MEDIUM}>{role}</BodyText>
      </LabelContainer>
    </ButtonContainer>
  );
};

export default ProjectCard;
