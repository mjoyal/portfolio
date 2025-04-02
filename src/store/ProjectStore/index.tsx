import { castToSnapshot, Instance, types } from "mobx-state-tree";
import projects from "src/data/projects";
import ProjectModel, { IProjectModel } from "./ProjectModel";

export type IProjectStore = Instance<typeof ProjectStore>;

const ProjectStore = types
  .model("ProjectStore", {
    projectsMap: types.map(ProjectModel),
    selectedProject: types.maybeNull(types.reference(ProjectModel)),
  })
  .actions((self) => {
    return {
      afterCreate(): void {
        (self as IProjectStore).addProjects();
      },

      addProjects() {
        projects.forEach((project) => {
          self.projectsMap.put(project);
        });
      },

      setSelectedProject(projectId: number): void {
        self.selectedProject = castToSnapshot(projectId);
      },
    };
  })
  .views((self) => {
    return {
      get projects(): IProjectModel[] {
        return Array.from(self.projectsMap.values());
      },

      getProject(id: number) {
        return (self as IProjectStore).projects.find(
          (project) => project.id === id
        );
      },

      getProjectFromSlug(slug: string) {
        return (self as IProjectStore).projects.find(
          (project) => project.slug === slug
        );
      },
    };
  });

export default ProjectStore;
