import SignInPage from "../pages/auth/signIn.page.jsx";
import SignUpPage from "../pages/auth/signUp.page.jsx";
import AuthLayout from "../layouts/auth.layout.jsx";
import OrderPage from "../pages/user/order.page.jsx";
import OurCustomersPage from "../pages/user/ourCustomers.page.jsx";
import AboutUsPage from "../pages/user/aboutUs.page.jsx";
import ContactUsPage from "../pages/user/contactUs.page.jsx";
import ProtectedRoute from "../components/auth/ProtectedRoute.components.jsx";


const AuthRouter = [
    {
        path: "/",
        element: <AuthLayout />,
        children: [
            {
                path: "signin",
                element: <ProtectedRoute><SignInPage /></ProtectedRoute>,
            },
            {
                path: "signup",
                element: <ProtectedRoute><SignUpPage /></ProtectedRoute>,
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
        ],
    },
];

export default AuthRouter;
