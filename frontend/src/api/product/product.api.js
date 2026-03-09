import { ENDPOINT, VERSION } from "../../utils/key/key";
import { getToken } from "../../utils/services/cookie";

export const getProducts = async () => {
    const token = getToken();
    const response = await fetch(
        `${ENDPOINT}/${VERSION}/products`,
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

export const updateProduct = async (id, data) => {
    const token = getToken();
    const response = await fetch(
        `${ENDPOINT}/${VERSION}/products/${id}`,
        {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(data),
        }
    );
    const result = await response.json();
    if (!response.ok) return { error: result.message };
    return result;
}