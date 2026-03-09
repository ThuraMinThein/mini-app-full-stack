import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { getToken, logout } from "../utils/services/cookie.js";
import { useGetMe } from "../hooks/auth/auth.hook.js";

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
  logoutUser: () => null,
  setToken: (token) => token,
};

const AuthContext = createContext(initialState);

const AuthProvider = ({
  children,
  ...props
}) => {
  const [token, setToken] = useState(getToken() || null);
  const { data: user, isLoading, error } = useGetMe({ enabled: !!token });

  const logoutUser = useCallback(() => {
    setToken(null);
    logout();
  }, []);

  useEffect(() => {
    if (error) {
      // eslint-disable-next-line
      logoutUser();
    }
  }, [error, logoutUser]);


  if (isLoading) {
    return <div>Loading...</div>;
  }

  const value = {
    user,
    token,
    isAuthenticated: !!token && !!user,
    logoutUser,
    setToken,
  };

  return (
    <AuthContext.Provider {...props} value={value}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export { AuthProvider, useAuth };