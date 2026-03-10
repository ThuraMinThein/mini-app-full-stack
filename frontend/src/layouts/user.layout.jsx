import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../providers/auth.provider";
import "./user.layout.css";
import UserNavbar from "../components/navbar/UserNavbar.component";
import { getLanguage } from "../utils/services/language.js";
import { useLanguage } from "../providers/language.provider";

const UserLayout = () => {
    const { language, languages } = useLanguage();
    const { logoutUser } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
    const closeSidebar = () => setSidebarOpen(false);

    const isActive = (path, tabParam) => {
        if (tabParam) {
            const params = new URLSearchParams(location.search);
            return location.pathname.includes(path) && params.get("tab") === tabParam;
        }
        return location.pathname.includes(path);
    };

    const handleNavigation = (path, tabParam) => {
        if (tabParam) {
            navigate(`${path}?tab=${tabParam}`);
        } else {
            navigate(path);
        }
        closeSidebar();
    };

    const homeMenu = getLanguage('home_menu', language, languages);
    const sidebarPriceList = getLanguage('sidebar_price_list', language, languages);
    const sidebarLogout = getLanguage('sidebar_log_out', language, languages);

    return (
        <div className="user-layout-container">

            <UserNavbar toggleSidebar={toggleSidebar} isOpen={sidebarOpen} />

            <div className="user-content-wrapper">
                <div
                    className={`sidebar-overlay ${sidebarOpen ? 'open' : ''}`}
                    onClick={closeSidebar}
                ></div>

                <aside className={`user-sidebar ${sidebarOpen ? 'open' : ''}`}>
                    <div className="sidebar-header">
                        <h2>{homeMenu}</h2>
                    </div>
                    <ul className="sidebar-menu">
                        <li
                            className={`menu-item ${isActive('/home', 'price-list') ? 'active' : ''}`}
                            onClick={() => handleNavigation('/home', 'price-list')}
                        >
                            {sidebarPriceList}
                        </li>

                        <li className="menu-item logout" onClick={logoutUser}>
                            {sidebarLogout}
                        </li>
                    </ul>
                </aside>

                <main className="user-main-content">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default UserLayout;
