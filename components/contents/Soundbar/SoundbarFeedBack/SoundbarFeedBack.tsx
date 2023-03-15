import style from "./SoundbarFeedBack.module.css";

interface SoundbarFeedBackProps {
  title: string;
  width: number;
}

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
