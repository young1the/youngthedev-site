import { useCallback } from "react";
import style from "./SoundbarControlPanel.module.css";

import { SoundbarProps } from "../Soundbar";

interface SoundbarControlPanelProps
  extends Pick<
    SoundbarProps,
    "onPrevClickHandler" | "onNextClickHandler" | "width"
  > {}

const SoundbarControlPanel = (props: SoundbarControlPanelProps) => {
  const { onPrevClickHandler, onNextClickHandler, width } = props;
  const convertToTime = useCallback((width: number) => {
    if (width < 0 || width > 100) {
      return "00:00";
    }
    const minutes = Math.floor((width * 282) / 100);
    const hours = Math.floor(minutes / 60);
    const paddedHours = hours.toString().padStart(2, "0");
    const paddedMinutes = (minutes % 60).toString().padStart(2, "0");
    return `${paddedHours}:${paddedMinutes}`;
  }, []);

  return (
    <div className={style.controlContainer}>
      <div className={style.timeLine}>{convertToTime(width)}</div>
      <div onClick={onPrevClickHandler} className={style.controlButton}>
        {"<<"}
      </div>
      <div onClick={onNextClickHandler} className={style.controlButton}>
        {">>"}
      </div>
    </div>
  );
};

export default SoundbarControlPanel;
