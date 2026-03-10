import { useAuth } from "../../providers/auth.provider.jsx";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({
    children,
    redirectTo = '/signin',
}) => {
    const { isAuthenticated } = useAuth();
    const location = useLocation();

    if (!isAuthenticated && location.pathname !== redirectTo) {
        return <Navigate to={redirectTo} state={{ from: location }} replace />;
    }

    if (location.pathname == "/signin" && isAuthenticated) {
        return <Navigate to={"/"} replace />;
    }

    return <>{children}</>;
};

export default ProtectedRoute;