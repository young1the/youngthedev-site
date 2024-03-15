import ThemeButton from "@/components/button/ThemeButton/ThemeButton";
import LogoText from "@/components/text/LogoText/LogoText";

interface HeaderProps {
    onClick: () => void;
}

const Header = ({onClick}: HeaderProps) => {
    return (
        <div
            className="fixed top-0 z-41 w-full px-8 flex justify-between border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <LogoText/>
            <ThemeButton onClick={onClick}/>
        </div>
    );
};

export default Header;
