import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../providers/language.provider";
import { getLanguage } from "../../utils/services/language";
import './Footer.css'

export default function Footer() {
    const { language, languages } = useLanguage();

    const navigate = useNavigate();

    const home = getLanguage("header_home", language, languages);
    const order = getLanguage("header_order", language, languages);
    const contactUs = getLanguage("header_contact", language, languages);

    return (
        <footer className="footer">
            <div className="footer-container">
                <span>123 Fakturera</span>
                <ul className="footer-list">
                    <li onClick={() => navigate('/home')}>{home}</li>
                    <li onClick={() => navigate('/order')}>{order}</li>
                    <li onClick={() => navigate('/contact-us')}>{contactUs}</li>
                </ul>
            </div>
            <span>© Lättfaktura, CRO no. 638537, 2025. All rights reserved. </span>
        </footer>
    );
}