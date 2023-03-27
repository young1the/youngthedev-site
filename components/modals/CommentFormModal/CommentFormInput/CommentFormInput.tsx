import { ModalBackDrop, useModal } from "@/lib/modal";
import { Dispatch, SetStateAction } from "react";
import style from "./CommentFormInput.module.css";

interface CommentFormInputProps {
  comment: string;
  setComment: Dispatch<SetStateAction<string>>;
}

export const CommentFormInput = (props: CommentFormInputProps) => {
  const { comment, setComment } = props;
  return (
    <div className={style.container}>
      <input
        type="text"
        value={comment}
        className={style.input}
        maxLength={40}
        required
        onChange={(e) => setComment(e.target.value)}
      ></input>
      <button type="submit" className={style.send}>
        <img src={`./common/send.svg`}></img>
      </button>
      <span className={style.bar}></span>
    </div>
  );
};

export const AnonyInput = (props: CommentFormInputProps) => {
  const { state, on, off } = useModal(false);
  const { comment, setComment } = props;
  return (
    <div className={style.container}>
      <input
        type="text"
        value={comment}
        className={style.input}
        required
        onClick={on}
      ></input>
      <button type="submit" className={style.send}>
        <img src={`./common/send.svg`}></img>
      </button>
      <ModalBackDrop state={state} off={off} opacity={0}>
        <div className={style.anonyInput}>
          하나를 선택해주세요.
          <div className={style.anonyButtonContainer}>
            <div
              className={style.anonyButton}
              onClick={() => {
                setComment("🧀");
                off();
              }}
            >
              🧀
            </div>
            <div
              className={style.anonyButton}
              onClick={() => {
                setComment("💩");
                off();
              }}
            >
              💩
            </div>
          </div>
        </div>
      </ModalBackDrop>
    </div>
  );
};
