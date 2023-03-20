import { LinkPreviewType } from "@/lib/notionAPI";
import style from "./NotionLink.module.css";

interface NotionLinkProps {
  content: LinkPreviewType;
  width?: number;
}
const NotionLink = ({ content, width = 100 }: NotionLinkProps) => {
  return (
    <a
      href={content.url}
      className={style.link}
      style={{ width: `${width}%` }}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={style.imageWrapper}>
        <img
          className={style.git}
          src="/github.png"
          style={{ width: "100%", height: "100%" }}
          alt="github"
        />
      </div>
      {content.url}
    </a>
  );
};

export default NotionLink;
