import { useMutation, useQuery } from "@tanstack/react-query";
import { getMeAPI, signInAPI, signUpAPI } from "../../api/auth/auth.api.js";
import { useNavigate } from "react-router-dom";
import { login } from "../../utils/services/cookie.js";

export const useLogin = () => {
    const navigate = useNavigate();
    const from = navigate.state?.from?.pathname || "/";
    return useMutation({
        mutationFn: (data) => signInAPI(data),

        onSuccess: ({ data }) => {
            login(data.accessToken)
            navigate(from);
        },
    });
}

export const useSignUp = () =>
    useMutation({
        mutationFn: (data) => signUpAPI(data),
    });

export const useGetMe = (options = {}) =>
    useQuery({ queryFn: () => getMeAPI(), enabled: options.enabled });