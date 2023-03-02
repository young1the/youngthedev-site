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
      <div style={{ fontWeight: "700", fontSize: "1.5rem", cursor: "pointer" }}>
        👉 <NotionParagraph content={content} />
      </div>
      <input type="checkbox" className={style.checkbox}></input>
      {children.map((ele, index) => (
        <li key={index}>
          <NotionParagraph content={ele.content as TextConentType} />
        </li>
      ))}
    </label>
  );
};

export default NotionToggle;
