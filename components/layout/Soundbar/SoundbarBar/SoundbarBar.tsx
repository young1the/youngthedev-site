import style from "./SoundbarBar.module.css";
import { SoundbarProps } from "../Soundbar";
import { useCallback, useEffect, useMemo, useState } from "react";
import SoundbarPopOver from "./SoundbarPopOver/SoundbarPopOver";
import { Comment, Comments, MemoizedComment } from "../type";

interface SoundbarBarProps extends Pick<SoundbarProps, "width" | "title"> {
  comments: Comments | null;
}

const SoundbarBar = (props: SoundbarBarProps) => {
  const { width, comments, title } = props;
  const memoizedComments = useMemo<MemoizedComment[] | null>(() => {
    if (!comments) return null;
    const memo: MemoizedComment[] = Object.keys(comments)
      .map((ele: string) => {
        const { time, displayName, comment, uid } = comments[ele];
        return { id: ele, time, displayName, comment, uid };
      })
      .sort((a, b) => a.time - b.time);
    return memo;
  }, [comments]);
  const popOverIndex = useMemo(() => {
    if (!memoizedComments) return 0;
    let left = 0;
    let right = memoizedComments.length - 1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (memoizedComments[mid].time === width) {
        return mid;
      } else if (memoizedComments[mid].time < width) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return right >= 0 ? right : 0;
  }, [width, memoizedComments]);
  return (
    <div className={style.soundBar}>
      <div className={style.soundBarBackGround}></div>
      <div className={style.soundBarFill} style={{ width: `${width}%` }} />
      <SoundbarPopOver
        memoizedComments={memoizedComments}
        popOverIndex={popOverIndex}
        title={title}
      />
    </div>
  );
};

export default SoundbarBar;
