import Spinner from "@/components/contents/Spinner/Spinner";
import { SoundbarProps } from "@/components/layout/Soundbar/Soundbar";
import { firebase } from "@/lib/firebase";
import { PostDataPayload } from "@/lib/firebase/types";
import { ModalBackDrop, useModal } from "@/lib/modal";
import { User } from "firebase/auth";
import { useState } from "react";
import LoginModal from "../LoginModal/LoginModal";
import style from "./CommentFormModal.module.css";

interface CommentFormModalProps extends Pick<SoundbarProps, "title" | "width"> {
  user: User | undefined;
  parentModalOff: VoidFunction;
}

const CommentFormModal = (props: CommentFormModalProps) => {
  const { title, width: time, user, parentModalOff } = props;
  const { state, on, off } = useModal();
  const [comment, setComment] = useState("");
  const postHandler = async ({ title, time, comment }: PostDataPayload) => {
    on();
    await firebase.postData({ title, time, comment });
    off();
    parentModalOff();
  };
  if (!user) return <LoginModal {...props} />;
  const userState = !user ? "guest" : !user.photoURL ? "hamster" : "user";
  return (
    <>
      <form
        className={style.wrapper}
        onSubmit={(e) => {
          e.preventDefault();
          postHandler({ title, time, comment });
        }}
      >
        <input
          type="text"
          value={comment}
          onChange={(e) => {
            if (userState === "hamster") return;
            setComment(e.target.value);
          }}
        />
        {userState === "hamster" ? (
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
      <ModalBackDrop state={state} opacity={0}>
        <Spinner />
      </ModalBackDrop>
    </>
  );
};

export default CommentFormModal;
