import { Navigate } from "react-router-dom";
import { ProtectedRoute } from "../components/auth/protectedRoute.components";
import UserLayout from "../layouts/user.layout";
import HomePage from "../pages/user/home.page";
import OrderPage from "../pages/user/order.page";
import OurCustomersPage from "../pages/user/ourCustomers.page";
import AboutUsPage from "../pages/user/aboutUs.page";
import ContactUsPage from "../pages/user/contactUs.page";

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
                // children: [
                //     {
                //         path: "price-list",
                //     }
                // ]
            },
            {
                path: "order",
                element: <OrderPage />
            },
            {
                path: "our-customers",
                element: <OurCustomersPage />
            },
            {
                path: "about-us",
                element: <AboutUsPage />
            },
            {
                path: "contact-us",
                element: <ContactUsPage />
            },
        ]
    }
]

export default UserRouter;