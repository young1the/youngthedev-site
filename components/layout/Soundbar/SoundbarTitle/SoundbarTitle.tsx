import style from "./SoundbarTitle.module.css";
import { SoundbarProps } from "../Soundbar";
import { memo } from "react";

interface SoundbarTitleProps extends Pick<SoundbarProps, "title"> {}

const SoundbarTitle = (props: SoundbarTitleProps) => {
  const { title } = props;

  return (
    <div className={style.titleContainer}>
      <div className={style.infoTitle}>{title}</div>
      <div className={style.infoDetail}>youngthedev</div>
    </div>
  );
};

export default memo(SoundbarTitle);
