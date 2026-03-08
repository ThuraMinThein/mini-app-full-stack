import SignInPage from "../pages/auth/signIn.page.jsx";
import SignUpPage from "../pages/auth/signUp.page.jsx";
import AuthLayout from "../layouts/auth.layout.jsx";


const AuthRouter = [
    {
        path: "/auth/*",
        element: <AuthLayout />,
        children: [
            {
                path: "signin",
                element: <SignInPage />,
            },
            {
                path: "signup",
                element: <SignUpPage />,
            },
        ],
    },
];

export default AuthRouter;
