import React from "react";
import style from "./SoundbarPopOverComment.module.css";
import { MemoizedComment } from "../../../type";
import { firebase } from "@/lib/firebase";

interface SoundbarPopOverCommentProps {
  memoizedComment: MemoizedComment;
  title: string;
}

const SoundbarPopOverComment = (props: SoundbarPopOverCommentProps) => {
  const { memoizedComment, title } = props;
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
            firebase.deleteData({ id, title });
          }}
        >
          ❌
        </div>
      ) : null}
    </div>
  );
};

export default SoundbarPopOverComment;
