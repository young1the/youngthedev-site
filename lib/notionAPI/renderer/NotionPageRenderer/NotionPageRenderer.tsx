import { Fragment, memo } from "react";
import NotionLink from "../../components/NotionLink/NotionLink";
import NotionParagraph from "../../components/NotionParagraph/NotionParagraph";
import NotionToggle from "../../components/NotionToggle/NotionToggle";
import style from "./NotionPageRenderer.module.css";
import { LinkPreviewType, Page, TextContent } from "@/lib/notionAPI/types";

interface NotionPageRendererProps {
  content: Page[];
}

const NotionPageRenderer = ({ content }: NotionPageRendererProps) => {
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
            children={children as Page[]}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className={style.wrapper}>
      {content.map((ele: Page) => toJSX(ele))}
    </div>
  );
};

export default memo(NotionPageRenderer);
