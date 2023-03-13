import style from "./Track.module.css";

interface TrackProps {
  order: number;
  title: string;
}

const Track = ({ order, title }: TrackProps) => {
  return (
    <li className={style.wrapper}>
      <p className={style.order}>{order}</p>
      <p className={style.title}>{title}</p>
    </li>
  );
};

export default Track;
