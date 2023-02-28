import style from "./NotionParagraph.module.css";

interface NotionParagraphProps {
  value: string;
}
const NotionParagraph = ({ value }: NotionParagraphProps) => {
  return <p className={style.paragraph}>{value}</p>;
};

export default NotionParagraph;
