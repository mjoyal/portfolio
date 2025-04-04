import styled from "@emotion/styled";
import BodyText, { TextTypes } from "../BodyText";
import { observer } from "mobx-react";
import { IProjectModel } from "src/store/ProjectStore/ProjectModel";
import useStores from "src/hooks/useStores";
import useNavigateAndScroll from "src/hooks/useNavigateAndScroll";
import { useMediaQuery, useTheme } from "@mui/material";

const ButtonContainer = styled.button<{ projectId: number }>`
  ${({ theme }) => (theme as any).breakpoints.up("md")} {
    &:nth-of-type(1) {
      grid-area: top;
    }
    &:nth-of-type(2) {
      grid-area: left;
    }
    &:nth-of-type(3) {
      grid-area: right;
    }
  }
`;

const Image = styled.img<{ projectId: number }>`
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
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
    project: { id, name, slug, role, imageSource, heroImageSource },
  } = props;

  const {
    projectStore: { setSelectedProject },
  } = useStores();

  const navigate = useNavigateAndScroll();

  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));

  const getImageSource = () => {
    if (isSmall) {
      return imageSource;
    }

    return id === 1 ? heroImageSource : imageSource;
  };

  return (
    <ButtonContainer
      onClick={() => {
        setSelectedProject(id);
        navigate(slug);
      }}
      projectId={id}
    >
      <Image src={getImageSource()} projectId={id} />
      <LabelContainer>
        <BodyText type={TextTypes.LABEL}>{name}</BodyText>
        <BodyText type={TextTypes.BODY_MEDIUM}>{role}</BodyText>
      </LabelContainer>
    </ButtonContainer>
  );
};

export default observer(ProjectCard);
