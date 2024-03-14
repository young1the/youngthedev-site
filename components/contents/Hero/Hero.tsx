import style from "./Hero.module.css";
import Marquee from "../Marquee/Marquee";
import { Button } from "@/components/ui/button"
import TrackList from "../TrackList/TrackList";
import { memo } from "react";

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
          <img
            draggable={false}
            src="/artwork.jpeg"
            style={{ width: "100%", height: "100%" }}
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
              {
                "YOUNGTHEDEV(조영일)의 첫번째 데뷔 앨범입니다. 기존 포트폴리오의 단방향 소통의 한계를 탈피하고, 재미있는 경험을 주기 위한 노력을 담았습니다. 기능들은 라이브러리화 하여 유지보수를 쉽게하고 가독성을 높였습니다."
              }
            </p>
          </div>
        </div>
        <div className={style.action}>
          <Button onClick={onClick} >재생하기</Button>
        </div>
      </div>
      <TrackList trackList={trackList} />
    </main>
  );
};

export default memo(Hero);
