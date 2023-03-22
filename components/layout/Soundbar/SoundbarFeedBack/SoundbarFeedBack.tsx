import style from "./SoundbarFeedBack.module.css";
import { SoundbarProps } from "../Soundbar";
import { ModalBackDrop, useModal } from "@/lib/modal";
import LoginModal from "@/components/contents/LoginModal/LoginModal";
import CommentFormModal from "@/components/contents/CommentFormModal/CommentFormModal";
import { useFirebaseOnAuthChange } from "@/lib/firebase";

interface SoundbarFeedBackProps
  extends Pick<SoundbarProps, "title" | "width"> {}

const SoundbarFeedBack = (props: SoundbarFeedBackProps) => {
  const { user } = useFirebaseOnAuthChange();
  const {
    on: loginPopUpOn,
    off: loginPopUpoff,
    modalState: loginPopUpState,
  } = useModal(false);
  const { on, off, modalState } = useModal(false);
  const userState = !user ? "guest" : !user.photoURL ? "hamster" : "user";
  return (
    <>
      <div className={style.feedbackContainer}>
        <div onClick={loginPopUpOn}>
          {userState === "user" ? (
            <img
              className={style.avatar}
              src={user?.photoURL as string}
              alt="user avatar"
            />
          ) : userState === "guest" ? (
            <img className={style.avatar} src="./login.png" alt="need Login" />
          ) : (
            <div className={style.avatar}>🐹</div>
          )}
        </div>
        <div className={style.feedbackControlerWrapper} onClick={on}>
          💬
        </div>
      </div>
      <ModalBackDrop modalState={modalState} offModal={off}>
        {userState === "guest" ? (
          <LoginModal />
        ) : (
          <CommentFormModal {...props} user={userState} />
        )}
      </ModalBackDrop>
      <ModalBackDrop modalState={loginPopUpState} offModal={loginPopUpoff}>
        {<LoginModal />}
      </ModalBackDrop>
    </>
  );
};

export default SoundbarFeedBack;
