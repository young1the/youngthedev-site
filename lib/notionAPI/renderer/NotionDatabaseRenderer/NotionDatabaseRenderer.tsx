import React from "react";
import NotionDatabase from "../../components/NotionDatabase/NotionDatabase";
import { Database } from "../../types";
import style from "./NotionDatabaseRenderer.module.css";

interface NotionDatabaseRendererProps {
  content: Database[];
}

const NotionDatabaseRenderer = ({ content }: NotionDatabaseRendererProps) => {
  return (
    <div className={style.wrapper}>
      {content.map((project) => (
        <NotionDatabase key={project.id} project={project} />
      ))}
    </div>
  );
};

export default NotionDatabaseRenderer;
