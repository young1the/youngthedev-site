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
        notionCMS.filter(data => !!data).map((data: NotionData, index: number) => {
          let content;
          if (data.type === "child_page") {
            content = (
              <NotionPageRenderer
                key={data.id + "content"}
                content={data.content as Page[]}
                title={data.title}
              />
            );
          } else if (data.type === "child_database") {
            content = (
              <NotionDatabaseRenderer
                key={data.id + "content"}
                content={data.content as Database[]}
              />
            );
          } else {
            return null;
          }
          return (
            <Article
              key={data.id}
              ref={(ref) => (trackRefs.current[index] = ref)}
            >
              {content}
            </Article>
          );
        })}
    </>
  );
};

export default memo(NotionArticles);
