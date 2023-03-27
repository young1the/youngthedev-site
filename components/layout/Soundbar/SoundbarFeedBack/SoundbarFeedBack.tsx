import style from "./SoundbarFeedBack.module.css";
import { SoundbarProps } from "../Soundbar";
import { ModalBackDrop, useModal } from "@/lib/modal";
import LoginModal from "@/components/modals/LoginModal/LoginModal";
import CommentFormModal from "@/components/modals/CommentFormModal/CommentFormModal";
import { useFirebaseOnAuthChange } from "@/lib/firebase";
import UserAvatar from "@/components/contents/UserAvatar/UserAvatar";
import { memo, useEffect, useMemo } from "react";

interface SoundbarFeedBackProps
  extends Pick<SoundbarProps, "title" | "titleIndex" | "width"> {}

const SoundbarFeedBack = (props: SoundbarFeedBackProps) => {
  const { user } = useFirebaseOnAuthChange();
  const {
    on: loginPopUpOn,
    off: loginPopUpOff,
    state: loginPopUpState,
  } = useModal();
  const {
    on: commentFormOn,
    off: commentFormOff,
    state: commentFormState,
  } = useModal();
  return (
    <>
      <div className={style.feedbackContainer}>
        <UserAvatar user={user} loginPopUpOn={loginPopUpOn} />
        <div className={style.feedbackControlerWrapper} onClick={commentFormOn}>
          💬
        </div>
      </div>
      <ModalBackDrop state={commentFormState} off={commentFormOff}>
        <CommentFormModal
          {...props}
          user={user}
          parentModalOff={commentFormOff}
        />
      </ModalBackDrop>
      <ModalBackDrop state={loginPopUpState} off={loginPopUpOff}>
        <LoginModal user={user} parentModalOff={loginPopUpOff} />
      </ModalBackDrop>
    </>
  );
};

export default memo(SoundbarFeedBack);
