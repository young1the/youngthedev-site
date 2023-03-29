import Spinner from "@/components/contents/Spinner/Spinner";
import style from "./SoundbarThumbnail.module.css";
import { SoundbarProps } from "../Soundbar";
import { memo } from "react";

interface SoundbarThumbnailProps extends Pick<SoundbarProps, "title"> {}

const SoundbarThumbnail = (props: SoundbarThumbnailProps) => {
  const { title } = props;

  return (
    <div className={style.infoThumbnail}>
      {title === "Loading" ? (
        <Spinner />
      ) : (
        <img
          draggable={false}
          style={{ width: "100%", height: "100%" }}
          src="/smallAW.png"
          alt="artwork"
        />
      )}
    </div>
  );
};

export default memo(SoundbarThumbnail);
