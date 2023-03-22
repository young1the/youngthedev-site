import React, { Dispatch, SetStateAction } from "react";
import style from "./SoundbarPopOverLine.module.css";
import { MemoizedComment } from "../../../type";
import SoundbarPopOverComment from "../SoundbarPopOverComment/SoundbarPopOverComment";

interface SoundbarPopOverLineProps {
  memoizedComment: MemoizedComment;
}

const SoundbarPopOverLine = (props: SoundbarPopOverLineProps) => {
  const { memoizedComment } = props;
  const { time } = memoizedComment;
  return <div style={{ left: `${time}vw` }} className={style.popOver}></div>;
};

export default SoundbarPopOverLine;
