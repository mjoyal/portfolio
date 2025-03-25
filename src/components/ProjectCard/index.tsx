import styled from "@emotion/styled";
import BodyText, { TextTypes } from "../BodyText";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react";
import { IProjectModel } from "src/store/ProjectStore/ProjectModel";
import useStores from "src/hooks/useStores";

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
  project: IProjectModel;
}

// TODO: Add image alt

const ProjectCard = (props: IProjectCardProps) => {
  const {
    project: { id, name, slug, role, imageSource },
  } = props;

  const {
    projectStore: { setSelectedProject },
  } = useStores();

  const navigate = useNavigate();

  return (
    <ButtonContainer
      onClick={() => {
        setSelectedProject(id);
        navigate(slug);
      }}
    >
      <Image src={imageSource} />
      <LabelContainer>
        <BodyText type={TextTypes.LABEL}>{name}</BodyText>
        <BodyText type={TextTypes.BODY_MEDIUM}>{role}</BodyText>
      </LabelContainer>
    </ButtonContainer>
  );
};

export default observer(ProjectCard);
