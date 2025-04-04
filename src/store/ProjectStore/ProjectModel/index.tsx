import { Instance, types } from "mobx-state-tree";

export type IProjectModel = Instance<typeof ProjectModel>;

const ProjectModel = types.model("ProjectModel", {
  id: types.identifierNumber,
  name: types.maybe(types.string),
  slug: types.string,
  role: types.maybe(types.string),
  imageSource: types.string,
  heroImageSource: types.maybe(types.string),
  description: types.maybe(types.string),
});

export default ProjectModel;
