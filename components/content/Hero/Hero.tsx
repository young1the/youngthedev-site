import style from "./Hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <div className={style.container}>
      <div className={style.artwork}>
        <Image src="/artwork.jpeg" alt="artwork" fill />
      </div>
      <div className={style.title}></div>
      <div className={style.artist}></div>
      <div className={style.info}></div>
      <div className={style.description}></div>
      <div className={style.playButton}></div>
    </div>
  );
};

export default Hero;
