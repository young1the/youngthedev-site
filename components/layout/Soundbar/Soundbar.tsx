"use client";
import { useFirebaseRealTimeDataBase } from "@/lib/firebase";
import style from "./Soundbar.module.css";
import SoundbarBar from "./SoundbarBar/SoundbarBar";
import SoundbarControlPanel from "./SoundbarControlPanel/SoundbarControlPanel";
import SoundbarFeedBack from "./SoundbarFeedBack/SoundbarFeedBack";
import SoundbarThumbnail from "./SoundbarThumbnail/SoundbarThumbnail";
import SoundbarTitle from "./SoundbarTitle/SoundbarTitle";
import { Tracks } from "./type";

export interface SoundbarProps {
  width: number;
  title: string;
  titleIndex: number;
  onPrevClickHandler: VoidFunction;
  onNextClickHandler: VoidFunction;
}

const Soundbar = (props: SoundbarProps) => {
  const { titleIndex } = props;
  const { data: tracks } = useFirebaseRealTimeDataBase<Tracks>();
  const comments =
    tracks && tracks[titleIndex] ? { ...tracks[titleIndex].comments } : null;
  return (
    <div className={style.container}>
      <div className={style.panelContainer}>
        <SoundbarThumbnail title={props.title} />
        <SoundbarTitle title={props.title} />
      </div>
      <div className={style.panelContainer}>
        <SoundbarFeedBack {...props} />
      </div>
      <div className={style.panelContainer}>
        <SoundbarControlPanel {...props} />
      </div>
      <SoundbarBar
        width={props.width}
        titleIndex={titleIndex}
        comments={comments}
      />
    </div>
  );
};

export default Soundbar;
