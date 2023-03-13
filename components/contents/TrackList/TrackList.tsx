import Track from "../Track/Track";
import style from "./TrackList.module.css";

interface TrackListProps {
  trackList: string[];
}

const TrackList = ({ trackList }: TrackListProps) => {
  return (
    <ol className={style.trackList}>
      {trackList.map((ele, index) => (
        <Track key={ele} order={index + 1} title={ele} />
      ))}
    </ol>
  );
};

export default TrackList;
