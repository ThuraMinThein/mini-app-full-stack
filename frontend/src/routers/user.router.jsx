import { Navigate } from "react-router-dom";
import { ProtectedRoute } from "../components/auth/ProtectedRoute.components.jsx";
import UserLayout from "../layouts/user.layout.jsx";
import HomePage from "../pages/user/home.page.jsx";

const UserRouter = [
    {
        path: "/",
        element: <UserLayout />,
        children: [
            {
                index: true,
                element: <Navigate to="home" />,
            },
            {
                path: "home",
                element: <ProtectedRoute><HomePage /></ProtectedRoute>,
                children: [
                    {
                        index: true,
                        element: <Navigate to="price-list" />,
                    },
                    {
                        path: "price-list",
                        // element: 
                    }
                ]
            },
        ]
    }
]

export default UserRouter;