import { useAuth } from "../../providers/auth.provider.jsx";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({
    children,
    redirectTo = '/signin',
}) => {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to={redirectTo} replace />;
    }

    return <>{children}</>;
};