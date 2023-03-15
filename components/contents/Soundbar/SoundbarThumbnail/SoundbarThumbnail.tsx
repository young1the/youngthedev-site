import Image from "next/image";
import Spinner from "@/components/contents/Spinner/Spinner";
import style from "./SoundbarThumbnail.module.css";

interface SoundbarThumbnailProps {
  title: string;
}

const SoundbarThumbnail = (props: SoundbarThumbnailProps) => {
  const { title } = props;

  return (
    <div className={style.infoThumbnail}>
      {title === "Loading" ? (
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
  );
};

export default SoundbarThumbnail;
