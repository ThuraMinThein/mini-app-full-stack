import { useEffect, useRef, useState } from "react";
import './Navbar.css'
import LanguageSwitch from "../languageSwitcher/LanguageSwitch.component";
import { useLanguage } from "../../providers/language.provider";
import { getLanguage } from "../../utils/services/language";
import { LOGO } from "../../utils/key/key";
import { useNavigate } from "react-router-dom";
import HamburgerMenu from "../hamburger/HamburgerMenu.component";

const Navbar = () => {

    const { language, languages, setLanguage } = useLanguage();
    const switcherRef = useRef(null);
    const [open, setOpen] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                switcherRef.current &&
                !switcherRef.current.contains(event.target)
            ) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") setOpen(false);
    });

    const home = getLanguage("header_home", language, languages);
    const order = getLanguage("header_order", language, languages);
    const ourCustomers = getLanguage("header_our_customer", language, languages);
    const aboutUs = getLanguage("header_about", language, languages);
    const contactUs = getLanguage("header_contact", language, languages);

    const onClickMenu = () => {
        setOpen(!open);
    }

    return (
        <nav className="navbar" ref={switcherRef}>
            <div className="nav-container">

                <img onClick={() => navigate('/')} className="logo" src={LOGO} alt="logo" />

                <HamburgerMenu className="auth-menu" onClickAction={onClickMenu} isOpen={open} />

                <div className="menu-container">
                    <ul className={`nav-menu ${open ? "open" : ""}`}>
                        <li onClick={() => navigate('/home')}>{home}</li>
                        <li onClick={() => navigate('/order')}>{order}</li>
                        <li onClick={() => navigate('/our-customers')}>{ourCustomers}</li>
                        <li onClick={() => navigate('/about-us')}>{aboutUs}</li>
                        <li onClick={() => navigate('/contact-us')}>{contactUs}</li>

                    </ul>
                    <LanguageSwitch currentLang={language} onChangeLang={setLanguage} />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;