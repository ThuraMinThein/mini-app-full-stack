import { ENDPOINT, VERSION } from "../../utils/key/key";
import { getToken } from "../../utils/services/cookie";

export const getProducts = async (props) => {
    const { search, page, limit } = props;
    const token = getToken();

    const param = new URLSearchParams();
    if (page) param.append("page", page.toString());
    if (limit) param.append("limit", limit.toString());
    if (search) param.append("search", search);

    const response = await fetch(
        `${ENDPOINT}/${VERSION}/products?${param}`,
        {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
    const result = await response.json();
    if (!response.ok) throw { error: result.message };
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
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }
    );
    const result = await response.json();
    if (!response.ok) throw { error: result?.errors?.[0]?.msg || "Request failed" };
    return result;
}