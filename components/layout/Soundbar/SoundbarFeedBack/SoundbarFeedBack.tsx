import style from "./SoundbarFeedBack.module.css";
import { SoundbarProps } from "../Soundbar";
import { ModalBackDrop, useModal } from "@/lib/modal";
import LoginModal from "@/components/contents/LoginModal/LoginModal";
import { firebase } from "@/lib/firebase";

interface SoundbarFeedBackProps
  extends Pick<SoundbarProps, "title" | "width"> {}

const SoundbarFeedBack = (props: SoundbarFeedBackProps) => {
  const { on, off, modalState } = useModal(false);
  return (
    <>
      <div className={style.feedbackContainer}>
        <div className={style.feedbackControlerWrapper} onClick={on}>
          💬
        </div>
        <button
          onClick={() => {
            firebase.postData({
              title: props.title,
              time: props.width,
              comment: "Hello World",
            });
          }}
        >
          포스트
        </button>
      </div>
      <ModalBackDrop modalState={modalState} offModal={off}>
        <LoginModal />
      </ModalBackDrop>
    </>
  );
};

export default SoundbarFeedBack;
