import React from "react";
import NotionProject from "../../components/NotionProject/NotionProject";
import { ProjectType } from "../../types";
import style from "./NotionProjects.module.css";

interface NotionProjectsRendererProps {
  projects: ProjectType[];
}

const NotionProjectsRenderer = ({ projects }: NotionProjectsRendererProps) => {
  return (
    <div className={style.wrapper}>
      {projects.map((project) => (
        <NotionProject key={project.id} project={project} />
      ))}
    </div>
  );
};

export default NotionProjectsRenderer;
