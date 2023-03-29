import { LinkPreviewType } from "@/lib/notionAPI";
import style from "./NotionLink.module.css";

interface NotionLinkProps {
  content: LinkPreviewType;
}
const NotionLink = ({ content }: NotionLinkProps) => {
  return (
    <a
      href={content.url}
      className={style.link}
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
      <div className={style.description}>
        <p className={style.linkText}>{content.url}</p>
      </div>
    </a>
  );
};

export default NotionLink;
