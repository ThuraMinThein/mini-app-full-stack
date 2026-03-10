import { useMutation, useQuery } from "@tanstack/react-query";
import { getMeAPI, signInAPI, signUpAPI } from "../../api/auth/auth.api.js";
import { useNavigate, useLocation } from "react-router-dom";
import { login } from "../../utils/services/cookie.js";
import { useAuth } from "../../providers/auth.provider.jsx";

export const useLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { setToken } = useAuth();
    const from = location.state?.from?.pathname || "/";
    return useMutation({
        mutationFn: (data) => signInAPI(data),

        onSuccess: ({ data }) => {
            login(data.accessToken);
            setToken(data.accessToken);
            navigate(from, { replace: true });
        },
    });
}

export const useSignUp = () =>
    useMutation({
        mutationFn: (data) => signUpAPI(data),
    });

export const useGetMe = (options = {}) =>
    useQuery({ queryKey: ["me"], queryFn: () => getMeAPI(), enabled: options.enabled });