import React from "react";
import style from "./Soundbar.module.css";
const Soundbar = ({ width, title }: any) => {
  return (
    <div className={style.container}>
      <div className={style.infoContainer}>
        <div className={style.infoThumbnail}></div>
        <div className={style.titleContainer}>
          <div className={style.infoTitle}>{title}</div>
          <div className={style.infoDetail}>youngthedev</div>
        </div>
        <div className={style.feedbackContainer}>
          <div className={style.feedbackControlerWrapper}>👍</div>
          <div className={style.feedbackControlerWrapper}>👎</div>
          <div className={style.feedbackControlerWrapper}>🫵</div>
        </div>
      </div>
      <div className={style.controlContainer}>
        <div className={style.timeLine}>11:11</div>
        <div className={style.prevButton}>{"<"}</div>
        <div className={style.playButton}>{"ㅁ"}</div>
        <div className={style.nextButton}>{">"}</div>
      </div>
      <div className={style.soundBar}>
        <div className={style.soundBarBackGround}></div>
        <div className={style.soundBarFill} style={{ width: `${width}` }}></div>
      </div>
    </div>
  );
};

export default Soundbar;
