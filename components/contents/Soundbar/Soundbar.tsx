import style from "./Soundbar.module.css";
import SoundbarBar from "./SoundbarBar/SoundbarBar";
import SoundbarControlPanel from "./SoundbarControlPanel/SoundbarControlPanel";
import SoundbarFeedBack from "./SoundbarFeedBack/SoundbarFeedBack";
import SoundbarThumbnail from "./SoundbarThumbnail/SoundbarThumbnail";
import SoundbarTitle from "./SoundbarTitle/SoundbarTitle";

export interface SoundbarProps {
  width: number;
  title: string;
  onPrevClickHandler: VoidFunction;
  onNextClickHandler: VoidFunction;
}

const Soundbar = (props: SoundbarProps) => {
  return (
    <div className={style.container}>
      <div className={style.infoContainer}>
        <SoundbarThumbnail {...props} />
        <SoundbarTitle {...props} />
        <SoundbarFeedBack {...props} />
      </div>
      <SoundbarControlPanel {...props} />
      <SoundbarBar {...props} />
    </div>
  );
};

export default Soundbar;
