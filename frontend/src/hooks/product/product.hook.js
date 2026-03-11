import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from 'react-toastify';
import { getProducts, updateProduct } from "../../api/product/product.api.js";


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
            toast.error("Update Failed: " + error.errors[0].msg);
        }
    });
}