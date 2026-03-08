import { endPoint, version } from "../../utils/key/key";
import { getToken } from "../../utils/services/cookie";

export const getLanguages = async (lang) => {
    const token = getToken();
    const response = await fetch(
        `${endPoint}/${version}/languages`,
        {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            query: { lang },
        }
    );
    const result = await response.json();
    if (!response.ok) return { error: result.message };
    return result;
};
