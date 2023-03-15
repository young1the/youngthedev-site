import { useCallback } from "react";
import style from "./SoundbarControlPanel.module.css";

interface SoundbarControlPanelProps {
  onPrevClickHandler: VoidFunction;
  onNextClickHandler: VoidFunction;
  width: number;
}

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
      <div>{convertToTime(width)}</div>
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
