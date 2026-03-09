import { ENDPOINT, VERSION } from "../../utils/key/key";
import { getToken } from "../../utils/services/cookie";

export const signInAPI = async (data) => {
    const response = await fetch(
        `${ENDPOINT}/${VERSION}/users/sign-in`,
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        }
    );
    const result = await response.json();

    if (!response.ok) throw { message: result.error };
    return { success: true, data: result };
};

export const signUpAPI = async (data) => {
    const response = await fetch(
        `${ENDPOINT}/${VERSION}/users`,
        {
            method: "POST",
            body: JSON.stringify(data),
        }
    );
    const result = await response.json();

    if (!response.ok) throw { message: result.error };
    return result;
};

export const getMeAPI = async () => {
    const token = getToken();
    const response = await fetch(
        `${ENDPOINT}/${VERSION}/users/me`,
        {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
    const result = await response.json();
    if (!response.ok) throw { message: result.error };
    return result;
};
