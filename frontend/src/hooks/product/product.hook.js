import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from 'react-toastify';
import { addProduct, getProducts, updateProduct } from "../../api/product/product.api.js";

export const useAddProduct = ({ onSuccess }) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data) => addProduct(data),
        onSuccess: () => {
            toast.success("Successfully Added");
            queryClient.invalidateQueries({
                queryKey: ["products"]
            });
            onSuccess();
        },
        onError: (error) => {
            toast.error("Add Failed: " + error.error);
        }
    });
}

export const useGetProducts = (props) =>
    useQuery({ queryKey: ["products", props], queryFn: () => getProducts(props) });

export const useUpdateProduct = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, data }) => updateProduct(id, data),
        onSuccess: () => {
            toast.success("Successfully Updated");
            queryClient.invalidateQueries({
                queryKey: ["products"]
            });
        },
        onError: (error) => {
            toast.error("Update Failed: " + error.error);
        }
    });
}