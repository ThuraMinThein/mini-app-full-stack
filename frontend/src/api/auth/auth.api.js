import { endPoint, version } from "../../utils/key/key";
import { getToken } from "../../utils/services/cookie";

export const signInAPI = async (data) => {
    const response = await fetch(
        `${endPoint}/${version}/users/sign-in`,
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        }
    );
    const result = await response.json();

    if (!response.ok) return { error: result.message };
    return { success: true, data: result };
};

export const signUpAPI = async (data) => {
    const response = await fetch(
        `${endPoint}/${version}/users`,
        {
            method: "POST",
            body: JSON.stringify(data),
        }
    );
    const result = await response.json();
    if (!response.ok) return { error: result.message };
    return result;
};

export const getMeAPI = async () => {
    const token = getToken();
    const response = await fetch(
        `${endPoint}/${version}/users/me`,
        {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
    const result = await response.json();
    if (!response.ok) return { error: result.message };
    return result;
};
