import style from "./NotionTitle.module.css";

interface NotionTitleProps {
  value: string;
}
const NotionTitle = ({ value }: NotionTitleProps) => {
  return <h1 className={style.title}>{value}</h1>;
};

export default NotionTitle;
