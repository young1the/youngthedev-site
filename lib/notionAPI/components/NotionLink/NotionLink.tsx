import { LinkPreviewType } from "@/lib/notionAPI";
import Image from "next/image";
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
        <Image
          className={style.git}
          src="/github.png"
          alt="github"
          fill
          sizes="2rem, 2rem"
        />
      </div>
      {content.url}
    </a>
  );
};

export default NotionLink;
