import style from "./ThemeButton.module.css";

interface ThemeButtonProps {
  onClick: () => void;
}

const ThemeButton = ({ onClick }: ThemeButtonProps) => {
  return (
    <div className={style.wrapper} onClick={onClick}>
      <img
        className={style.star}
        src="/star.svg"
        style={{ width: "100%", height: "100%" }}
        alt="theme change button"
      />
    </div>
  );
};

export default ThemeButton;
