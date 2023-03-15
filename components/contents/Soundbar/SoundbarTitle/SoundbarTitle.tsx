import style from "./SoundbarTitle.module.css";

interface SoundbarTitleProps {
  title: string;
}

const SoundbarTitle = (props: SoundbarTitleProps) => {
  const { title } = props;

  return (
    <div className={style.titleContainer}>
      <div className={style.infoTitle}>{title}</div>
      <div className={style.infoDetail}>youngthedev</div>
    </div>
  );
};

export default SoundbarTitle;
