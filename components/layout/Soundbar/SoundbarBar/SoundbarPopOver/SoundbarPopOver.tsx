import { SoundbarProps } from "../../Soundbar";
import { MemoizedComment } from "../../type";
import SoundbarPopOverComment from "./SoundbarPopOverComment/SoundbarPopOverComment";
import SoundbarPopOverLine from "./SoundbarPopOverLine/SoundbarPopOverLine";

interface SoundbarPopOver extends Pick<SoundbarProps, "titleIndex"> {
  memoizedComments: MemoizedComment[] | null;
  popOverIndex: number;
}

const SoundbarPopOver = (props: SoundbarPopOver) => {
  const { memoizedComments, titleIndex, popOverIndex } = props;
  if (!memoizedComments) return null;
  return (
    <>
      {memoizedComments.map((ele: MemoizedComment) => {
        return <SoundbarPopOverLine key={ele.id} memoizedComment={ele} />;
      })}
      {memoizedComments[popOverIndex] ? (
        <SoundbarPopOverComment
          memoizedComment={memoizedComments[popOverIndex]}
          titleIndex={titleIndex}
        />
      ) : null}
    </>
  );
};

export default SoundbarPopOver;
