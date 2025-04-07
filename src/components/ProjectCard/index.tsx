import styled from "@emotion/styled";
import { observer } from "mobx-react";
import { IProjectModel } from "src/store/ProjectStore/ProjectModel";
import useStores from "src/hooks/useStores";
import useNavigateAndScroll from "src/hooks/useNavigateAndScroll";
import { useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";

const ButtonContainer = styled(motion.button)`
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
  color: ${({ theme }) => (theme as any).palette.text.primary};
`;

const ImageWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  border-radius: 3px;
`;

const ZoomImage = styled(motion.img)`
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
`;

const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

interface IProjectCardProps {
  project: IProjectModel;
}

const Spacer = styled.div`
  height: 10px;
`;

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
      whileHover={{ color: "#A0C7FF" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <ImageWrapper>
        <ZoomImage
          src={getImageSource()}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </ImageWrapper>

      <Spacer />
      <LabelContainer>
        <h5>{name?.toLocaleUpperCase()}</h5>
        <h6 style={{ color: "#f5f5f5" }}>{role}</h6>
      </LabelContainer>
    </ButtonContainer>
  );
};

export default observer(ProjectCard);
