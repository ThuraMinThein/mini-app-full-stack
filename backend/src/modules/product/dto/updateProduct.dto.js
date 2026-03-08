import { body } from "express-validator";

export const updateProductValidation = [
    body("name"),
    body("description"),
    body("price"),
    body("inPrice"),
    body("inStock"),
    body("unit"),
];