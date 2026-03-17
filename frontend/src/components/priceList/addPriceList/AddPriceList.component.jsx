import { useForm } from "react-hook-form";
import "./addPriceList.css";
import { FiXCircle } from "react-icons/fi";
import { useAddProduct } from "../../../hooks/product/product.hook";
import { useEffect, useRef } from "react";

const AddPriceList = ({ updateParams }) => {
    const addPriceListRef = useRef(null);
    const { mutate, error, isPending, isError } = useAddProduct({
        onSuccess: () => {
            reset();
            updateParams({ adding: "false" });
        }
    });

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        mutate(data);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                addPriceListRef.current &&
                !addPriceListRef.current.contains(event.target)
            ) {
                updateParams({ adding: "false" });
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") updateParams({ adding: "false" });;
    });

    return (
        <form className="add-price-list-container" onSubmit={handleSubmit(onSubmit)} ref={addPriceListRef}>
            <div className="add-price-list-header">
                <h2>Add New Product</h2>
                <span onClick={() => updateParams({ adding: "false" })} className="icon close"><FiXCircle /></span>
            </div>
            <div className="add-input">
                <label>Product Name</label>
                <input
                    type="text"
                    placeholder="Enter Product Name"
                    {...register("name", {
                        required: "Product Name is required",
                    })} />
                {errors.name && (
                    <p className="error">{errors.name.message}</p>
                )}
            </div>

            <div className="add-input">
                <label>Product Description</label>
                <input
                    type="text"
                    placeholder="Enter Product Description"
                    {...register("description", {
                        required: "Product Description is required",
                    })} />
                {errors.description && (
                    <p className="error">{errors.description.message}</p>
                )}
            </div>

            <div className="add-input">
                <label>Product Price</label>
                <input
                    type="number"
                    placeholder="Enter Product Price"
                    {...register("price", {
                        required: "Product Price is required",
                    })} />
                {errors.price && (
                    <p className="error">{errors.price.message}</p>
                )}
            </div>

            <div className="add-input">
                <label>Product In Price</label>
                <input
                    type="number"
                    placeholder="Enter Product In Price"
                    {...register("inPrice", {
                        required: "Product In Price is required",
                    })} />
                {errors.inPrice && (
                    <p className="error">{errors.inPrice.message}</p>
                )}
            </div>

            <div className="add-input">
                <label>Product In Stock</label>
                <input
                    type="number"
                    placeholder="Enter Product In Stock"
                    {...register("inStock", {
                        required: "Product In Stock is required",
                    })} />
                {errors.inStock && (
                    <p className="error">{errors.inStock.message}</p>
                )}
            </div>

            <div className="add-input">
                <label>Product Unit</label>
                <input
                    type="text"
                    placeholder="Enter Product Unit"
                    {...register("unit", {
                        required: "Product Unit is required",
                    })} />
                {errors.unit && (
                    <p className="error">{errors.unit.message}</p>
                )}
            </div>
            <button
                className="add-button"
                type="submit"
                disabled={isPending}
            >
                {isPending ? "Loading..." : "Add Product"}
            </button>
            {isError && (
                <p className="error">
                    {error?.message || "Add Product failed"}
                </p>
            )}
        </form>
    )
}

export default AddPriceList;