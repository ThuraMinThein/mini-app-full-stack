import { useEffect, useRef, useState } from "react";
import './LanguageSwitch.css'
import { FLAGS } from "../../utils/key/key";

const languages = [
    { code: "en", label: "English" },
    { code: "sv", label: "Svenska" }
];

export const LanguageSwitch = ({ currentLang, onChangeLang }) => {
    const [open, setOpen] = useState(false);
    const switcherRef = useRef(null);

    const current = languages.find((l) => l.code === currentLang);

    const handleSelect = (lang) => {
        onChangeLang(lang.code);
        setOpen(false);
    };

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

    return (
        <div className="lang-switcher" ref={switcherRef}>
            <div onClick={() => setOpen(!open)} className="lang-display">
                <span>{current?.label}</span>
                <img className="img-flag" src={FLAGS[current?.code]} alt={current?.label} />
            </div>

            {open && (
                <ul className="lang-dropdown">
                    {languages.map((lang) => (
                        <li
                            key={lang.code}
                            className="lang-option"
                            onClick={() => handleSelect(lang)}
                        >
                            <span>  {lang.label}</span>
                            <img className="img-flag" src={FLAGS[lang.code]} alt={lang?.label} />
                        </li>

                    ))}
                </ul>
            )}
        </div>
    );
}