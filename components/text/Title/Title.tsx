import style from "./Title.module.css";

interface TitleProps {
  value: string;
}

const Title = ({ value }: TitleProps) => {
  return <h1 className={style.title}>{value}</h1>;
};

export default Title;
