import Cookies from "js-cookie";
import { cookieName } from "../key/key";

export function login(token) {
    Cookies.set(cookieName, token, {
        expires: 30,
        secure: true,
        sameSite: "strict",
    });
}

export function logout() {
    Cookies.remove(cookieName);
    window.location.reload();
}

export function getToken() {
    return Cookies.get(cookieName);
}
