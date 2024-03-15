import { Fragment, memo } from "react";
import NotionLink from "../../components/NotionLink/NotionLink";
import NotionParagraph from "../../components/NotionParagraph/NotionParagraph";
import NotionToggle from "../../components/NotionToggle/NotionToggle";
import { LinkPreviewType, Page, TextContent } from "@/lib/notionAPI/types";
import NotionTitle from "@/lib/notionAPI/components/NotionTitle/NotionTitle";

interface NotionPageRendererProps {
  title: string;
  content: Page[];
}

const NotionPageRenderer = ({ title, content }: NotionPageRendererProps) => {
  const toJSX = (page: Page): JSX.Element | null => {
    let { type, id, content, children } = page;
    switch (type) {
      case "synced_block":
        return (
          <Fragment key={id}>
            {children?.map((page: Page) => {
              return toJSX(page);
            })}
          </Fragment>
        );
      case "paragraph":
        return <NotionParagraph key={id} content={content as TextContent} />;
      case "link_preview":
        return <NotionLink key={id} content={content as LinkPreviewType} />;
      case "toggle":
        return (
          <NotionToggle
            key={id}
            content={content as TextContent}
            toggleChildren={children as Page[]}
          />
        );
      default:
        return null;
    }
  };

  return (
    <article>
      <NotionTitle value={title}/>
      {content.map((ele: Page) => toJSX(ele))}
    </article>
  );
};

export default memo(NotionPageRenderer);
