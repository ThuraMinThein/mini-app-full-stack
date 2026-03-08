import { useMutation, useQuery } from "@tanstack/react-query";
import { getProducts, updateProduct } from "../../api/product/product.api";

export const useGetProducts = () =>
    useQuery({ queryFn: () => getProducts() });

export const useUpdateProduct = () =>
    useMutation({
        mutationFn: (data) => updateProduct(data),
    });