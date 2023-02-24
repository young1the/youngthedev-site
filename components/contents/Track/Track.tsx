import style from "./Track.module.css";

const Track = ({ order, title }: any) => {
  return (
    <li className={style.wrapper}>
      <p className={style.order}>{order}</p>
      <p className={style.title}>{title}</p>
    </li>
  );
};

export default Track;
