import { useCallback, useMemo } from "react";
import style from "./SoundbarControlPanel.module.css";

import { SoundbarProps } from "../Soundbar";

interface SoundbarControlPanelProps
  extends Pick<
    SoundbarProps,
    "onPrevClickHandler" | "onNextClickHandler" | "width"
  > {}

const SoundbarControlPanel = (props: SoundbarControlPanelProps) => {
  const { onPrevClickHandler, onNextClickHandler, width } = props;

  const controlButtons = useMemo(() => {
    return (
      <>
        <div onClick={onPrevClickHandler} className={style.controlButton}>
          {"<<"}
        </div>
        <div onClick={onNextClickHandler} className={style.controlButton}>
          {">>"}
        </div>
      </>
    );
  }, [onPrevClickHandler, onNextClickHandler]);

  return (
    <div className={style.controlContainer}>
      {controlButtons}
    </div>
  );
};

export default SoundbarControlPanel;
