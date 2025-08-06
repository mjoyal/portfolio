import styled from "@emotion/styled";
import { observer } from "mobx-react";
import { IProjectModel } from "src/store/ProjectStore/ProjectModel";
import useStores from "src/hooks/useStores";
import { Stack } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ImageWrapper = styled(motion.button)`
  overflow: hidden;
  width: 100%;
  border-radius: 5px;
`;

const ZoomImage = styled(motion.img)`
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
`;

interface IProjectCardProps {
  project: IProjectModel;
  // eslint-disable-next-line no-unused-vars
  setIsVisible: (arg1: boolean) => void;
}

const Spacer = styled.div`
  height: 20px;
`;

const ProjectCard = (props: IProjectCardProps) => {
  const {
    project: { id, name, slug, imageSource, quickDescription },
    setIsVisible,
    setCallOut
    ...rest
  } = props;

  const {
    projectStore: { setSelectedProject },
  } = useStores();

  const navigate = useNavigate();

  console.log("image ", imageSource);
  return (
    <Stack>
      <ImageWrapper
        onClick={() => {
          setSelectedProject(id);
          navigate(`/project/${slug}`);
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => }
        {...rest}
      >
        <ZoomImage
          src={imageSource}
          whileHover={{ borderRadius: 30 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </ImageWrapper>

      <Spacer />
      <Stack gap={0.5}>
        <h5>{name}</h5>
        <p style={{ color: "#f5f5f5" }}>{quickDescription}</p>
      </Stack>
    </Stack>
  );
};

export default observer(ProjectCard);
