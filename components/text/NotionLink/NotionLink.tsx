import style from "./NotionLink.module.css";

interface NotionLinkProps {
  value: string;
  href: string;
}
const NotionLink = ({ value, href }: NotionLinkProps) => {
  return (
    <a href={href} className={style.paragraph}>
      {value}
    </a>
  );
};

export default NotionLink;
