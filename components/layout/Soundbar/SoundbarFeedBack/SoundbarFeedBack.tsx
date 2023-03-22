import style from "./SoundbarFeedBack.module.css";
import { SoundbarProps } from "../Soundbar";
import { ModalBackDrop, useModal } from "@/lib/modal";
import LoginModal from "@/components/contents/LoginModal/LoginModal";
import { firebase } from "@/lib/firebase";
import { useEffect, useState } from "react";
import CommentFormModal from "@/components/contents/CommentFormModal/CommentFormModal";

interface SoundbarFeedBackProps
  extends Pick<SoundbarProps, "title" | "width"> {}

const SoundbarFeedBack = (props: SoundbarFeedBackProps) => {
  const [user, setUser] = useState<string>("guest");
  useEffect(() => {
    const offAuthChange = firebase.onAuthChangePhotoURL(setUser);
    return () => {
      offAuthChange();
    };
  }, []);
  const {
    on: loginPopUpOn,
    off: loginPopUpoff,
    modalState: loginPopUpState,
  } = useModal(false);
  const { on, off, modalState } = useModal(false);

  return (
    <>
      <div className={style.feedbackContainer}>
        <div onClick={loginPopUpOn}>
          {user === "anonymous" ? (
            <div className={style.avatar}>🐹</div>
          ) : user === "guest" ? (
            <img className={style.avatar} src="./login.png" alt="need Login" />
          ) : (
            <img className={style.avatar} src={user} alt="user avatar" />
          )}
        </div>
        <div className={style.feedbackControlerWrapper} onClick={on}>
          💬
        </div>
      </div>
      <ModalBackDrop modalState={modalState} offModal={off}>
        {user === "guest" ? (
          <LoginModal />
        ) : (
          <CommentFormModal {...props} user={user} />
        )}
      </ModalBackDrop>
      <ModalBackDrop modalState={loginPopUpState} offModal={loginPopUpoff}>
        {<LoginModal />}
      </ModalBackDrop>
    </>
  );
};

export default SoundbarFeedBack;
