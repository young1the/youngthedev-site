"use client";
import { firebase } from "@/lib/firebase";
import { useFirebaseRealTimeDataBase } from "@/lib/firebase/hooks";
import { useEffect, useState } from "react";
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
  onPrevClickHandler: VoidFunction;
  onNextClickHandler: VoidFunction;
}

const Soundbar = (props: SoundbarProps) => {
  const { title } = props;
  const { data: tracks } = useFirebaseRealTimeDataBase<Tracks>();
  const comments =
    tracks && tracks[title] ? { ...tracks[title].comments } : null;
  return (
    <div className={style.container}>
      <div className={style.panelContainer}>
        <SoundbarThumbnail {...props} />
        <SoundbarTitle {...props} />
      </div>
      <div className={style.panelContainer}>
        <SoundbarFeedBack {...props} />
      </div>
      <div className={style.panelContainer}>
        <SoundbarControlPanel {...props} />
      </div>
      <SoundbarBar {...props} comments={comments} />
    </div>
  );
};

export default Soundbar;
