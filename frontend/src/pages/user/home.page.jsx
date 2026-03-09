import { Outlet } from "react-router-dom";

const HomePage = () => {
    return (
        <div>
            <h1>Home</h1>
            <Outlet />
        </div>
    );
};

export default HomePage;
