import { firebase } from "@/lib/firebase";
import { useEffect, useState } from "react";
import style from "./Soundbar.module.css";
import SoundbarBar from "./SoundbarBar/SoundbarBar";
import SoundbarControlPanel from "./SoundbarControlPanel/SoundbarControlPanel";
import SoundbarFeedBack from "./SoundbarFeedBack/SoundbarFeedBack";
import SoundbarThumbnail from "./SoundbarThumbnail/SoundbarThumbnail";
import SoundbarTitle from "./SoundbarTitle/SoundbarTitle";

export interface SoundbarProps {
  width: number;
  title: string;
  onPrevClickHandler: VoidFunction;
  onNextClickHandler: VoidFunction;
}

const Soundbar = (props: SoundbarProps) => {
  const [user, setUser] = useState<string | null>(null);
  useEffect(() => {
    const onAuthChange = firebase.onAuthChange(setUser);
    return () => {
      onAuthChange();
    };
  }, []);
  return (
    <div className={style.container}>
      <div className={style.infoContainer}>
        <SoundbarThumbnail {...props} />
        <SoundbarTitle {...props} />
        <SoundbarFeedBack {...props} />
      </div>
      <div className="test">
        <div>{user}</div>
        <div>
          <button
            onClick={() => {
              firebase.goggleSignInWithPopup();
            }}
          >
            로그인
          </button>
          <button
            onClick={() => {
              firebase.signInAnonny();
            }}
          >
            익명로그인
          </button>
          <button
            onClick={() => {
              firebase.signOutFromSite();
            }}
          >
            로그아웃
          </button>
        </div>
      </div>
      <SoundbarControlPanel {...props} />
      <SoundbarBar {...props} />
    </div>
  );
};

export default Soundbar;
