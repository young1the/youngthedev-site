import Image from "next/image";
import style from "./ThemeButton.module.css";

interface ThemeButtonProps {
  onClick: () => void;
}

const ThemeButton = ({ onClick }: ThemeButtonProps) => {
  return (
    <div className={style.wrapper} onClick={onClick}>
      <Image
        className={style.star}
        src="/star.svg"
        alt="theme change button"
        fill
      />
    </div>
  );
};

export default ThemeButton;
