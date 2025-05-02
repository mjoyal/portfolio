import styled from "@emotion/styled";
import { observer } from "mobx-react";
import { IProjectModel } from "src/store/ProjectStore/ProjectModel";
import useStores from "src/hooks/useStores";
import { Stack } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

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

interface IProjectCardProps {
  project: IProjectModel;
  setIsVisible: (arg1: boolean) => void;
}

const Spacer = styled.div`
  height: 10px;
`;

const ProjectCard = (props: IProjectCardProps) => {
  const {
    project: { id, name, slug, role, imageSource },
    setIsVisible,
    ...rest
  } = props;

  const {
    projectStore: { setSelectedProject },
  } = useStores();

  const navigate = useNavigate();

  return (
    <ButtonContainer
      onClick={() => {
        setSelectedProject(id);
        navigate(`/project/${slug}`);
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      {...rest}
    >
      <ImageWrapper>
        <ZoomImage
          src={imageSource}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </ImageWrapper>

      <Spacer />
      <Stack direction={{ xs: "column", sm: "row" }} gap={1.5}>
        <h5>{name}</h5>
        <h6 style={{ color: "#f5f5f5" }}>{role}</h6>
      </Stack>
    </ButtonContainer>
  );
};

export default observer(ProjectCard);
