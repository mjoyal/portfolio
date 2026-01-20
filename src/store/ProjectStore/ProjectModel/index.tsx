import { Instance, types } from "mobx-state-tree";

export type IProjectModel = Instance<typeof ProjectModel>;

const ProjectModel = types
  .model("ProjectModel", {
    id: types.identifierNumber,
    name: types.maybe(types.string),
    slug: types.string,
    role: types.maybe(types.string),
    imageSource: types.string,
    heroImageSource: types.maybe(types.string),
    description: types.maybe(types.string),
  })
  .views((self) => {
    return {
      get quickDescription(): string {
        if (self.slug === "fit52") {
          return "Carrie Underwood's fitness app";
        }

        if (self.slug === "crewlywed") {
          return "Real-time multiplayer web game";
        }

        return "Discovering local music gigs";
      },
    };
  });

export default ProjectModel;
