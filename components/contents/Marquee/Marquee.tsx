import style from "./Marquee.module.css";

interface MarqueeProps {
  value: string;
  isTop?: boolean;
}

const Marquee = ({ value, isTop = false }: MarqueeProps) => {
  return (
    <div
      className={style.marquee}
      style={isTop ? { top: "0" } : { bottom: "0" }}
    >
      <div className={style.track}>
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
