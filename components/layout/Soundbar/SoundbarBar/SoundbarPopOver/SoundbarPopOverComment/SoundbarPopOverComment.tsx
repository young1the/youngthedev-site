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
  const position = `${time > 50 ? 100 - time : time}vw`;
  const dynamicStyle = {
    left: time <= 50 ? position : "",
    right: time > 50 ? position : "",
  };
  return (
    <div className={style.popOverComment} style={dynamicStyle}>
      {displayName}
      {" : "}
      {comment}
      {firebase.getCurrentUser() === uid ? (
        <div className={style.deleteButton}>
          <div
            onClick={() => {
              firebase.deleteData({ id, titleIndex });
            }}
          >
            ❌
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default SoundbarPopOverComment;
