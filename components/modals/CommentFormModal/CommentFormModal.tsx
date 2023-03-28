import Spinner from "@/components/contents/Spinner/Spinner";
import { SoundbarProps } from "@/components/layout/Soundbar/Soundbar";
import { firebase } from "@/lib/firebase";
import { PostDataPayload } from "@/lib/firebase/types";
import { ModalBackDrop, useModal } from "@/lib/modal";
import { User } from "firebase/auth";
import { useState } from "react";
import LoginModal from "../LoginModal/LoginModal";
import {
  CommentFormInput,
  AnonyInput,
} from "./CommentFormInput/CommentFormInput";
import style from "./CommentFormModal.module.css";

interface CommentFormModalProps
  extends Pick<SoundbarProps, "titleIndex" | "width" | "title"> {
  user: User | undefined;
  parentModalOff: VoidFunction;
}

const CommentFormModal = (props: CommentFormModalProps) => {
  const { titleIndex, width: time, user, parentModalOff, title } = props;
  const { state, on, off } = useModal(false);
  const [comment, setComment] = useState("");
  const postHandler = async ({
    titleIndex,
    time,
    comment,
  }: PostDataPayload) => {
    try {
      on();
      await firebase.postData({ titleIndex, time, comment });
    } finally {
      off();
      parentModalOff();
    }
  };
  if (!user) return <LoginModal {...props} />;
  const isUser = user?.photoURL;
  return (
    <>
      <div className={style.wrapper}>
        {`"${title}" 에 대해 피드백을 남겨주세요!`}
        <form
          className={style.container}
          onSubmit={(e) => {
            e.preventDefault();
            postHandler({ titleIndex, time, comment });
          }}
        >
          {isUser ? (
            <CommentFormInput comment={comment} setComment={setComment} />
          ) : (
            <AnonyInput comment={comment} setComment={setComment} />
          )}
        </form>
      </div>
      <ModalBackDrop state={state} opacity={0}>
        <Spinner />
      </ModalBackDrop>
    </>
  );
};

export default CommentFormModal;
