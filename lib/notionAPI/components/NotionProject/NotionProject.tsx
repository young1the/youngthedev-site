import React from "react";
import Image from "next/image";
import { ProjectType } from "../../types";
import style from "./NotionProject.module.css";

interface NotionProjectProps {
  project: ProjectType;
}
const NotionProject = ({ project }: NotionProjectProps) => {
  return (
    <a
      className={style.container}
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={style.imageContainer}>
        <Image src={project.cover} fill alt="thumbnail" sizes="15rem, 7rem" />
      </div>
      <div className={style.infoContainer}>
        <h1>{project.properties.이름.title[0].plain_text}</h1>
        <ul className={style.stackContainer}>
          {project.properties.stacks.multi_select.map((stack) => (
            <li key={stack.id}>{stack.name}</li>
          ))}
        </ul>
        <h4>
          {project.properties.description.rich_text.reduce((acc, ele) => {
            return acc + ele.plain_text;
          }, "")}
        </h4>
      </div>
    </a>
  );
};

export default NotionProject;
