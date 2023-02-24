import style from "./Marquee.module.css";

interface MarqueeProps {
  value: string;
}

const Marquee = ({ value }: MarqueeProps) => {
  return (
    <div className={style.marquee}>
      <div className={style.track}>
        <div className={style.text}>{value}</div>
        <div className={style.text}>{value}</div>
        <div className={style.text}>{value}</div>
        <div className={style.text}>{value}</div>
        <div className={style.text}>{value}</div>
        <div className={style.text}>{value}</div>
        <div className={style.text}>{value}</div>
        <div className={style.text}>{value}</div>
        <div className={style.text}>{value}</div>
      </div>
    </div>
  );
};

export default Marquee;
