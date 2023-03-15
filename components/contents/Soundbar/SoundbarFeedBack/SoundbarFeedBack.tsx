import style from "./SoundbarFeedBack.module.css";
import { SoundbarProps } from "../Soundbar";

interface SoundbarFeedBackProps
  extends Pick<SoundbarProps, "title" | "width"> {}

const SoundbarFeedBack = (props: SoundbarFeedBackProps) => {
  return (
    <div className={style.feedbackContainer}>
      <div className={style.feedbackControlerWrapper}>👍</div>
      <div className={style.feedbackControlerWrapper}>👎</div>
      <div className={style.feedbackControlerWrapper}>🫵</div>
    </div>
  );
};

export default SoundbarFeedBack;
