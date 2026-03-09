import { useState } from "react";
import './Navbar.css'
import { LanguageSwitch } from "../languageSwitcher/LanguageSwitch.component";
import { useLanguage } from "../../providers/language.provider";
import { getLanguage } from "../../utils/services/language";
import { LOGO } from "../../utils/key/key";
import { useNavigate } from "react-router-dom";

export default function Navbar() {



    const { language, languages, setLanguage } = useLanguage();
    const [open, setOpen] = useState(false);

    const navigate = useNavigate();

    const home = getLanguage("header_home", language, languages);
    const order = getLanguage("header_order", language, languages);
    const ourCustomers = getLanguage("header_our_customer", language, languages);
    const aboutUs = getLanguage("header_about", language, languages);
    const contactUs = getLanguage("header_contact", language, languages);

    return (
        <nav className="navbar">
            <div className="nav-container">

                <img onClick={() => navigate('/')} className="logo" src={LOGO} alt="logo" />

                <div
                    className={`hamburger ${open ? "active" : ""}`}
                    onClick={() => setOpen(!open)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

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