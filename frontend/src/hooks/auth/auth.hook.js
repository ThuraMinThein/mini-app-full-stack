import { useMutation, useQuery } from "@tanstack/react-query";
import { getMeAPI, signInAPI, signUpAPI } from "../../api/auth/auth.api.js";

export const useLogin = () =>
    useMutation({
        mutationFn: (data) => signInAPI(data),
    });

export const useSignUp = () =>
    useMutation({
        mutationFn: (data) => signUpAPI(data),
    });

export const useGetMe = (options = {}) =>
    useQuery({ queryFn: () => getMeAPI(), enabled: options.enabled });