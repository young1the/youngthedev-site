import Link from "next/link";
import style from "./LogoText.module.css";

const LogoText = () => {
    return (
        <div className="py-2">
            <Link className={style.logoText} href="/">
                YOUNGTHEDEV
            </Link>
        </div>
    );
};

export default LogoText;
