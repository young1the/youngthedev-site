import style from "./SoundbarBar.module.css";
import { SoundbarProps } from "../Soundbar";

interface SoundbarBarProps extends Pick<SoundbarProps, "width"> {}

const SoundbarBar = (props: SoundbarBarProps) => {
  const { width } = props;
  return (
    <div className={style.soundBar}>
      <div className={style.soundBarBackGround}></div>
      <div className={style.soundBarFill} style={{ width: `${width}%` }}>
        {/* <div
        style={{
          width: "9px",
          height: "9px",
          borderRadius: "50%",
          position: "absolute",
          top: "-3px",
          left: `50vw`,
          opacity: `${(1 / Math.abs(width - 50)) * 100}%`,
          background: "red",
        }}
      ></div> */}
      </div>
    </div>
  );
};

export default SoundbarBar;
