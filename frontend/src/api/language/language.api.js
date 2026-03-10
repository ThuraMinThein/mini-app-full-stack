import { ENDPOINT, VERSION } from "../../utils/key/key";

export const getLanguages = async () => {
    const response = await fetch(
        `${ENDPOINT}/${VERSION}/languages`,
        {
            method: "GET",
        }
    );
    const result = await response.json();
    if (!response.ok) return { error: result.message };
    return result;
};
