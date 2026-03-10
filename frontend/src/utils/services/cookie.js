import Cookies from "js-cookie";
import { COOKIE_NAME } from "../key/key";

export function login(token) {
    Cookies.set(COOKIE_NAME, token, {
        expires: 30,
        secure: true,
        sameSite: "strict",
    });
}

export function logout() {
    Cookies.remove(COOKIE_NAME);
    window.location.reload();
}

export function getToken() {
    return Cookies.get(COOKIE_NAME);
}
