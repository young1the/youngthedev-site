import Link from "next/link";
import style from "./LogoText.module.css";

const LogoText = () => {
  return (
    <Link className={style.logoText} href="/">
      youngthedev
    </Link>
  );
};

export default LogoText;
