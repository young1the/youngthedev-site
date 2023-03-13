import ModalBackDrop from "@/components/layout/ModalBackDrop/ModalBackDrop";
import Image from "next/image";
import { useState } from "react";
import Spinner from "../Spinner/Spinner";
import style from "./Soundbar.module.css";

interface SoundbarProps {
  width: number;
  title: string;
  onPrevClickHandler: VoidFunction;
  onNextClickHandler: VoidFunction;
}

const Soundbar = ({
  width,
  title,
  onPrevClickHandler,
  onNextClickHandler,
}: SoundbarProps) => {
  const isLoading = title === "Loading" ? true : false;
  const convertToTime = (): string => {
    if (width < 0 || width > 100 || isLoading) {
      return "00:00";
    }
    const minutes = Math.floor((width * 282) / 100);
    const hours = Math.floor(minutes / 60);
    const paddedHours = hours.toString().padStart(2, "0");
    const paddedMinutes = (minutes % 60).toString().padStart(2, "0");
    return `${paddedHours}:${paddedMinutes}`;
  };

  return (
    <div className={style.container}>
      <div className={style.infoContainer}>
        <div className={style.infoThumbnail}>
          {isLoading ? (
            <Spinner />
          ) : (
            <Image
              priority={true}
              draggable={false}
              src="/smallAW.png"
              fill
              sizes="2rem 2rem"
              alt="artwork"
            />
          )}
        </div>
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
        <div className={style.timeLine}>{convertToTime()}</div>
        <div onClick={onPrevClickHandler} className={style.controlButton}>
          {"<<"}
        </div>
        <div onClick={onNextClickHandler} className={style.controlButton}>
          {">>"}
        </div>
      </div>
      <div className={style.soundBar}>
        <div className={style.soundBarBackGround}></div>
        <div
          className={style.soundBarFill}
          style={isLoading ? { width: "0%" } : { width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Soundbar;
