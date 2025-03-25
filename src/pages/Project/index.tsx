import { observer } from "mobx-react";

import useStores from "src/hooks/useStores";

const ProjectPage = () => {
  const {
    projectStore: { selectedProject },
  } = useStores();

  return (
    <>
      <h1>Project: {selectedProject?.name}</h1>
      <h3>Role: {selectedProject?.role}</h3>
    </>
  );
};

export default observer(ProjectPage);
