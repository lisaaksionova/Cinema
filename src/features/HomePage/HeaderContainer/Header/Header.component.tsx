import "./Header.styles.css";
import Logo from "./Logo/Logo.component";
import Menu from "./Menu/Menu.component";
import Selection from "./Selection/Selection.component";

const Header = () => {
    return (
        <div className="header">
            <Logo/>
            <Selection />
            <Menu />
        </div>
    );
}

export default Header;