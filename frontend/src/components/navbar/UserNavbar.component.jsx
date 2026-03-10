import { useAuth } from "../../providers/auth.provider";
import { useLanguage } from "../../providers/language.provider";
import Avatar from "../avatar/Avatar.component.jsx";
import HamburgerMenu from "../hamburger/HamburgerMenu.component.jsx";
import LanguageSwitch from "../languageSwitcher/LanguageSwitch.component.jsx";
import "./UserNavbar.css";

const UserNavbar = ({ toggleSidebar, isOpen }) => {

    const { language, setLanguage } = useLanguage();
    const { user } = useAuth();

    return (
        <header className="user-layout-header">
            <div className="header-left">

                <HamburgerMenu onClickAction={toggleSidebar} isOpen={isOpen} />

                <div className="user-info">
                    <Avatar text={user?.name} />

                    <div className="user-details">
                        <span className="user-name">{user?.name}</span>
                        <span className="user-email">{user?.email}</span>
                    </div>
                </div>
            </div>

            <LanguageSwitch currentLang={language} onChangeLang={setLanguage} />

        </header>
    )
}

export default UserNavbar;