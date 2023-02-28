import Track from "../Track/Track";
import style from "./TrackList.module.css";

const TrackList = () => {
  return (
    <ol className={style.trackList}>
      <Track order={1} title={"Intro"} />
      <Track order={2} title={"42 Seool"} />
      <Track order={3} title={"Wanted"} />
      <Track order={4} title={"With You"} />
      <Track order={5} title={"Outro"} />
    </ol>
  );
};

export default TrackList;
