import { TextContent } from "@/lib/notionAPI";
import style from "./NotionParagraph.module.css";

interface NotionParagraphProps {
  content: TextContent;
}

const NotionParagraph = ({ content }: NotionParagraphProps) => {
  return (
    <>
      {content.rich_text.map((text, index) => {
        return (
          <p
            className={text.annotations.bold ? style.bold : style.none}
            key={index}
          >
            {text.plain_text}
          </p>
        );
      })}
    </>
  );
};

export default NotionParagraph;
