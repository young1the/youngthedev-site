import { useEffect, useState } from "react";
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
  offModal: VoidFunction;
}

const ModalBackDrop = ({ children, offModal }: ModalBackDropProps) => {
  console.log("backdrop");
  return (
    <ModalPortal>
      <div className={style.backdrop} onClick={offModal}>
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {children}
        </div>
      </div>
    </ModalPortal>
  );
};

export default ModalBackDrop;
