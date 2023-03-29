import { Database } from "../../types";
import style from "./NotionDatabase.module.css";

interface NotionDatabaseProps {
  content: Database;
}
const NotionDatabase = ({ content }: NotionDatabaseProps) => {
  return (
    <a
      className={style.container}
      href={content.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={style.imageContainer}>
        <img src={content.cover} alt="thumbnail" className={style.thumbnail} />
      </div>
      <div className={style.infoContainer}>
        <h1>{content.properties.이름.title[0].plain_text}</h1>
        <ul className={style.stackContainer}>
          {content.properties.stacks.multi_select.map((stack) => (
            <li key={stack.id}>{stack.name}</li>
          ))}
        </ul>
        <h4>
          {content.properties.description.rich_text.reduce((acc, ele) => {
            return acc + ele.plain_text;
          }, "")}
        </h4>
      </div>
    </a>
  );
};

export default NotionDatabase;
