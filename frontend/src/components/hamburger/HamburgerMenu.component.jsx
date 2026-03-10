import "./HamburgerMenu.css";

const HamburgerMenu = ({ onClickAction, isOpen, className }) => {
    return (
        <button className={`hamburger-menu ${className}`} onClick={onClickAction}>
            <span className="hamburger-line" style={{ transform: isOpen ? "translateY(7px) rotate(45deg)" : "none" }}></span>
            <span className="hamburger-line" style={{ opacity: isOpen ? 0 : 1 }}></span>
            <span className="hamburger-line" style={{ transform: isOpen ? "translateY(-7px) rotate(-45deg)" : "none" }}></span>
        </button>
    )
}

export default HamburgerMenu;