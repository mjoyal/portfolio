import { useParams } from "react-router-dom";

const ProjectPage = () => {
  const { slug } = useParams();

  return (
    <>
      <h1>Project: {slug}</h1>
    </>
  );
};

export default ProjectPage;
