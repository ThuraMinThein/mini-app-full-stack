import { Outlet } from "react-router-dom";
import { logout } from "../../utils/services/cookie";

const HomePage = () => {
    return (
        <div>
            <h1>Home</h1>
            <Outlet />

            <button onClick={() => logout()}>Log out</button>
        </div>
    );
};

export default HomePage;
