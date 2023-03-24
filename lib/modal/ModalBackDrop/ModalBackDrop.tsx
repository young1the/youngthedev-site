import { memo, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import style from "./ModalBackDrop.module.css";

function ModalPortal({ children }: { children: JSX.Element }) {
  const [element, setElement] = useState<Element | null>(null);

  useEffect(() => {
    const modalElement = document.querySelector("#modal");
    setElement(modalElement);
  }, []);

  if (!element) {
    return <></>;
  }
  return ReactDOM.createPortal(children, element);
}

interface ModalBackDropProps {
  children: JSX.Element;
  state: boolean;
  off?: VoidFunction;
  opacity?: number;
}

const ModalBackDrop = ({
  children,
  state,
  off = () => {},
  opacity = 0.5,
}: ModalBackDropProps) => {
  return state ? (
    <ModalPortal>
      <div
        className={style.backdrop}
        style={{ backgroundColor: `rgba(0, 0, 0, ${opacity})` }}
        onClick={off}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {children}
        </div>
      </div>
    </ModalPortal>
  ) : null;
};

export default memo(ModalBackDrop);
