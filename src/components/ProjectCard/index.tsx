import styled from "@emotion/styled";
import BodyText, { TextTypes } from "../BodyText";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react";
import { IProjectModel } from "src/store/ProjectStore/ProjectModel";
import useStores from "src/hooks/useStores";

const ButtonContainer = styled.button``;

const Image = styled.img<{ projectId: number }>`
  height: ${({ projectId }) => {
    if (projectId === 1) {
      return "844px";
    }

    if (projectId === 2) {
      return "442px";
    }

    return "638px";
  }};
  width: ${({ projectId }) => {
    if (projectId === 1) {
      return "687px";
    }

    if (projectId === 2) {
      return "700px";
    }

    return "576px";
  }};
`;

const LabelContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
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
      <Image src={imageSource} projectId={id} />
      <LabelContainer>
        <BodyText type={TextTypes.LABEL}>{name}</BodyText>
        <BodyText type={TextTypes.BODY_MEDIUM}>{role}</BodyText>
      </LabelContainer>
    </ButtonContainer>
  );
};

export default observer(ProjectCard);
