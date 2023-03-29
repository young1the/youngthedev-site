import React, { memo } from "react";
import style from "./SoundbarPopOverLine.module.css";
import { MemoizedComment } from "../../../type";

interface SoundbarPopOverLineProps {
  memoizedComment: MemoizedComment;
}

const SoundbarPopOverLine = (props: SoundbarPopOverLineProps) => {
  const { memoizedComment } = props;
  const { time } = memoizedComment;
  return <div style={{ left: `${time}vw` }} className={style.popOver}></div>;
};

export default memo(SoundbarPopOverLine);
