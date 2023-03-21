import { firebase } from "@/lib/firebase";
import { SoundbarProps } from "../Soundbar";

interface SoundbarBarProps extends Pick<SoundbarProps, "width" | "title"> {
  comments: any;
}

const SoundbarCommentsContainer = (props: SoundbarBarProps) => {
  const { width, comments, title } = props;
  return (
    <>
      {Object.keys(comments).map((ele: any) => {
        const { time, displayName, comment, uid } = comments[ele];
        return (
          <div
            style={{
              position: "absolute",
              background: "white",
              padding: "1rem",
              top: "-3rem",
              left: `${time}vw`,
              opacity: `${(1 / (width - time)) * 100}%`,
            }}
            onClick={() => {
              if (uid === firebase.getCurrentUser()?.uid) {
                firebase.deleteData({ id: ele, title });
              } else {
                alert("자신의 코멘트만 지울 수 있습니다!");
              }
            }}
          >
            {displayName} : {comment}
          </div>
        );
      })}
    </>
  );
};

export default SoundbarCommentsContainer;
