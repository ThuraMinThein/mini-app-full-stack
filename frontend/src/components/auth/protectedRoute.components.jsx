import { useAuth } from "../../providers/auth.provider.jsx";

export const ProtectedRoute = ({
    children,
    redirectTo = '/auth/signin',
}) => {
    const { isAuthenticated } = useAuth();

    return !isAuthenticated ? <Navigate to={redirectTo} replace /> : children;
};