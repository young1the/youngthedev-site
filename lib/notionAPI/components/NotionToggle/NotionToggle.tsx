import { ParsedDataType, TextConentType } from "@/lib/notionAPI";
import NotionParagraph from "../NotionParagraph/NotionParagraph";
import style from "./NotionToggle.module.css";

interface NotionToggleProps {
  content: TextConentType;
  children: ParsedDataType[];
}
const NotionToggle = ({ content, children }: NotionToggleProps) => {
  return (
    <label>
      <input type="checkbox" className={style.checkbox}></input>
      <div className={style.toggle}>
        <p className={style.toggleTriangle}>▶︎</p>
        <NotionParagraph content={content} />
      </div>
      {children.map((ele, index) => (
        <li key={index}>
          <NotionParagraph content={ele.content as TextConentType} />
        </li>
      ))}
    </label>
  );
};

export default NotionToggle;
