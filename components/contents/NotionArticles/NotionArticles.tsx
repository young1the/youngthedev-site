import Title from "@/components/text/Title/Title";
import {
  Database,
  NotionData,
  NotionDatabaseRenderer,
  NotionPageRenderer,
  Page,
} from "@/lib/notionAPI";
import React, { memo, MutableRefObject } from "react";
import Article from "../Article/Article";

interface NotionArticlesProps {
  notionCMS: NotionData[];
  trackRefs: MutableRefObject<(HTMLDivElement | null)[]>;
}

const NotionArticles = (props: NotionArticlesProps) => {
  const { notionCMS, trackRefs } = props;
  return (
    <>
      {notionCMS &&
        notionCMS.map((data: NotionData, index: number) => {
          let content;
          if (data.type === "child_page") {
            content = (
              <NotionPageRenderer
                key={data.id + "content"}
                content={data.content as Page[]}
              />
            );
          } else {
            content = (
              <NotionDatabaseRenderer
                key={data.id + "content"}
                content={data.content as Database[]}
              />
            );
          }
          return (
            <Article
              key={data.id}
              ref={(ref) => (trackRefs.current[index] = ref)}
            >
              <Title key={data.id + "title"} value={data.title} />
              {content}
            </Article>
          );
        })}
    </>
  );
};

export default memo(NotionArticles);
