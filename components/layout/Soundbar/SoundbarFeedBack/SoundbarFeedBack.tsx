import style from "./SoundbarFeedBack.module.css";
import { SoundbarProps } from "../Soundbar";
import { ModalBackDrop, useModal } from "@/lib/modal";
import LoginModal from "@/components/contents/LoginModal/LoginModal";

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
      </div>
      <ModalBackDrop modalState={modalState} offModal={off}>
        <LoginModal />
      </ModalBackDrop>
    </>
  );
};

export default SoundbarFeedBack;
