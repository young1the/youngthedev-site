"use client";
import { useFirebaseRealTimeDataBase } from "@/lib/firebase";
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
    <div className="sticky h-20 flex justify-between w-screen top-[calc(100vh-80px)] p-2 bg-background z-50">
      <div className="flex p-2 gap-3 items-center">
        <SoundbarThumbnail title={props.title} />
        <SoundbarTitle title={props.title} />
      </div>
      <div className="flex p-2 gap-3 items-center">
      </div>
      <div className="flex p-2 gap-3 items-center">
        <SoundbarFeedBack {...props} />
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
