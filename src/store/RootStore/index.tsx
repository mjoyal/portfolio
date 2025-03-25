import { applySnapshot, Instance, types } from "mobx-state-tree";
import ProjectStore from "../ProjectStore";

export type IRootStore = Instance<typeof RootStore>;

const RootStore = types
  .model("RootStore", {
    projectStore: types.optional(ProjectStore, {}),
  })
  .actions((self) => {
    return {
      resetStores() {
        applySnapshot(self, {});
      },
    };
  });

export default RootStore;
