import style from "./Hero.module.css";
import Marquee from "../Marquee/Marquee";
import {Button} from "@/components/ui/button"
import {memo} from "react";
import {TypographyH1} from "@/components/ui/TypographyH1";
import {TypographyH2} from "@/components/ui/TypographyH2";
import {TypographyMuted} from "@/components/ui/TypographyMuted";
import {TypographyP} from "@/components/ui/TypographyP";
import {TypographyOl} from "@/components/ui/TypographyOl";

interface HeroProps {
    onClick: VoidFunction;
    trackList: string[];
}

const Hero = ({onClick, trackList}: HeroProps) => {
    return (
        <main className={style.wrapper}>
            <div className={style.grid}>
                <div className={style.artwork}>
                    <Marquee value="New Release" isTop={true}/>
                    <img src="/artwork.jpeg" alt="album-cover" style={{width: '100%', aspectRatio: 1}}/>
                    <Marquee value="New Release"/>
                </div>
                <div className={style.heading}>
                    <TypographyH1>1st Mini Album</TypographyH1>
                    <TypographyMuted>WEB F/E * 2024년</TypographyMuted>
                    <TypographyH2>YOUNGTHEDEV</TypographyH2>
                </div>
                <div className={style.info}>
                    <TypographyP>
                        YOUNGTHEDEV(조영일)의 첫번째 데뷔 앨범입니다. 기존 포트폴리오의 단방향 소통의 한계를 벗어나, 재미있는 경험을 주기 위한 노력을 담았습니다.
                    </TypographyP>
                </div>
                <div className={style.action}>
                    <Button onClick={onClick}>재생하기</Button>
                </div>
            </div>
            <TypographyOl items={trackList}/>
        </main>
    );
};

export default memo(Hero);
