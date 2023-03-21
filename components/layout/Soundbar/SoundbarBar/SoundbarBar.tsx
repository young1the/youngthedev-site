import style from "./SoundbarBar.module.css";
import { SoundbarProps } from "../Soundbar";

interface SoundbarBarProps extends Pick<SoundbarProps, "width"> {}

const SoundbarBar = (props: SoundbarBarProps) => {
  const { width } = props;
  return (
    <div className={style.soundBar}>
      <div className={style.soundBarBackGround}></div>
      <div className={style.soundBarFill} style={{ width: `${width}%` }} />
    </div>
  );
};

export default SoundbarBar;
