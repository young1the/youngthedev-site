import ThemeButton from "@/components/button/ThemeButton/ThemeButton";
import LogoText from "@/components/text/LogoText/LogoText";

import style from "./Header.module.css";

interface HeaderProps {
  onClick: () => void;
}

const Header = ({ onClick }: HeaderProps) => {
  return (
    <div className={style.wrapper}>
      <LogoText />
      <ThemeButton onClick={onClick} />
    </div>
  );
};

export default Header;
