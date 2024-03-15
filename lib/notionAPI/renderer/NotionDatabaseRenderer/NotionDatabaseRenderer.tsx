import React from "react";
import NotionDatabase from "../../components/NotionDatabase/NotionDatabase";
import {Database} from "../../types";
import NotionTitle from "@/lib/notionAPI/components/NotionTitle/NotionTitle";

interface NotionDatabaseRendererProps {
    title: string;
    content: Database[];
}

const NotionDatabaseRenderer = ({title, content}: NotionDatabaseRendererProps) => {
    return (
        <article className="flex flex-col gap-8">
            <NotionTitle value={title}></NotionTitle>
            {content.map((project) => (
                <NotionDatabase key={project.id} content={project}/>
            ))}
        </article>
    );
};

export default NotionDatabaseRenderer;
