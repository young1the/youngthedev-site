import { LinkPreviewType } from "@/lib/notionAPI";
import style from "./NotionLink.module.css";

interface NotionLinkProps {
  content: LinkPreviewType;
}
const NotionLink = ({ content }: NotionLinkProps) => {
  return (
    <a href={content.url} className={style.link}>
      to github
    </a>
  );
};

export default NotionLink;
