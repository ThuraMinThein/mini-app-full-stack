import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar.component.jsx";
import { BACKGROUND } from "../utils/key/key.js";
import Footer from "../components/footer/Footer.component.jsx";

const AuthLayout = () => {
    return (
        <div>
            <div
                className="auth-layout"
                style={{
                    backgroundImage: `url(${BACKGROUND})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    minHeight: "100vh"
                }}
            >
                <Navbar />
                <Outlet />
                <Footer />
            </div>
        </div>
    );
};

export default AuthLayout;
