import React from "react";
import style from "./SoundbarPopOverComment.module.css";
import { MemoizedComment } from "../../../type";
import { firebase } from "@/lib/firebase";

interface SoundbarPopOverCommentProps {
  memoizedComment: MemoizedComment;
  titleIndex: number;
}

const SoundbarPopOverComment = (props: SoundbarPopOverCommentProps) => {
  const { memoizedComment, titleIndex } = props;
  const { time, displayName, comment, uid, id } = memoizedComment;
  return (
    <div className={style.popOverComment} style={{ left: `${time}vw` }}>
      {displayName}
      {" : "}
      {comment}
      {firebase.getCurrentUser() === uid ? (
        <div
          className={style.deleteButton}
          onClick={() => {
            console.log(titleIndex);
            firebase.deleteData({ id, titleIndex });
          }}
        >
          ❌
        </div>
      ) : null}
    </div>
  );
};

export default SoundbarPopOverComment;
