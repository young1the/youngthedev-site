import { SoundbarProps } from "@/components/layout/Soundbar/Soundbar";
import { firebase } from "@/lib/firebase";
import { useState } from "react";
import style from "./CommentFormModal.module.css";

interface CommentFormModalProps extends Pick<SoundbarProps, "title" | "width"> {
  user: string;
}

const CommentFormModal = (props: CommentFormModalProps) => {
  const { title, width: time, user } = props;
  const [comment, setComment] = useState("");

  return (
    <form
      className={style.wrapper}
      onSubmit={(e) => {
        e.preventDefault();
        firebase.postData({ title, time, comment });
      }}
    >
      {user}
      <input
        type="text"
        value={comment}
        onChange={(e) => {
          if (user === "hamster") return;
          setComment(e.target.value);
        }}
      />
      {user === "hamster" ? (
        <div>
          <div
            onClick={() => {
              setComment("🧀");
            }}
          >
            🧀
          </div>
          <div
            onClick={() => {
              setComment("💩");
            }}
          >
            💩
          </div>
        </div>
      ) : null}
      <button type="submit">보내기</button>
    </form>
  );
};

export default CommentFormModal;
