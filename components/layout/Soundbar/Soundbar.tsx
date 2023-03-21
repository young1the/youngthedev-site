"use client";
import { firebase } from "@/lib/firebase";
import { useEffect, useState } from "react";
import style from "./Soundbar.module.css";
import SoundbarBar from "./SoundbarBar/SoundbarBar";
import SoundbarCommentsContainer from "./SoundbarCommentsContainer/SoundbarCommentsContainer";
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
  const [user, setUser] = useState<any>(null);
  useEffect(() => {
    // const onAuthChange = firebase.onAuthChange(setUser);
    firebase.onRealTimeDataBase(setUser);
    return () => {
      // onAuthChange();
      firebase.offRealTimeDataBase();
    };
  }, []);
  useEffect(() => {
    console.log(user);
  }, [user]);
  const comments =
    props.title !== "Loading" && user[props.title]
      ? { ...user[props.title].comments }
      : {};
  return (
    <div className={style.container}>
      <div className={style.infoContainer}>
        <SoundbarThumbnail {...props} />
        <SoundbarTitle {...props} />
        <SoundbarFeedBack {...props} />
      </div>
      <div className="test">{/* <div>{user}</div> */}</div>
      <SoundbarControlPanel {...props} />
      <SoundbarCommentsContainer {...props} comments={comments} />
      <SoundbarBar {...props} />
    </div>
  );
};

export default Soundbar;
