import { Page, TextContent } from "@/lib/notionAPI";
import NotionParagraph from "../NotionParagraph/NotionParagraph";
import style from "./NotionToggle.module.css";

interface NotionToggleProps {
  content: TextContent;
  toggleChildren: Page[];
}
const NotionToggle = ({ content, toggleChildren }: NotionToggleProps) => {
  return (
    <label>
      <input type="checkbox" className={style.checkbox}></input>
      <div className={style.toggle}>
        <p className={style.toggleTriangle}>▶︎</p>
        <NotionParagraph content={content} />
      </div>
      {toggleChildren.map((ele, index) => (
        <li key={index}>
          <NotionParagraph content={ele.content as TextContent} />
        </li>
      ))}
    </label>
  );
};

export default NotionToggle;
