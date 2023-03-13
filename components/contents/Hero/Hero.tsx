import style from "./Hero.module.css";
import Image from "next/image";
import Marquee from "../Marquee/Marquee";
import Button from "@/components/button/Button/Button";
import TrackList from "../TrackList/TrackList";

interface HeroProps {
  onClick: VoidFunction;
  trackList: string[];
}

const Hero = ({ onClick, trackList }: HeroProps) => {
  return (
    <main className={style.wrapper}>
      <div className={style.grid}>
        <div className={style.artwork}>
          <Marquee value="New Release" isTop={true} />
          <Image
            priority={true}
            draggable={false}
            src="/artwork.jpeg"
            fill
            sizes="20rem 20rem"
            alt="artwork"
          />
          <Marquee value="New Release" />
        </div>
        <div className={style.info}>
          <div>
            <h1>1st Mini Album</h1>
            <h3>WEB F/E * 2023년</h3>
            <h2>YOUNGTHEDEV</h2>
          </div>
          <div className={style.infoDescription}>
            <p>
              소개글입니다. 소개글입니다. 소개글입니다.
              소개글입니다.소개글입니다. 소개글입니다.소개글입니다.
              소개글입니다.소개글입니다. 소개글입니다.소개글입니다.
              소개글입니다.소개글입니다.
            </p>
          </div>
        </div>
        <div className={style.action}>
          <Button label="재생하기" onClick={onClick} />
        </div>
      </div>
      <TrackList trackList={trackList} />
    </main>
  );
};

export default Hero;
