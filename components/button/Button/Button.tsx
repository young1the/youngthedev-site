import { memo } from "react";
import style from "./Button.module.css";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <div className={style.button} onClick={onClick}>
      {label}
    </div>
  );
};

export default memo(Button);
