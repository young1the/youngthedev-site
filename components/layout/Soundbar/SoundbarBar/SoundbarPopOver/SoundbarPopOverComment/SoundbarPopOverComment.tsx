import React, { memo } from "react";
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
    <div className="max-w-[50vw] truncate overflow-ellipsis absolute border-b shadow bg-background/95 -top-16 p-4" style={dynamicStyle}>
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

export default memo(SoundbarPopOverComment);
