import { body } from "express-validator";

export const createProductValidation = [
    body("name")
        .notEmpty()
        .withMessage("Name is required"),
    body("description"),
    body("price")
        .notEmpty()
        .withMessage("Price is required")
        .isFloat({ gt: 0 })
        .withMessage("Price must be a positive number"),
    body("inPrice")
        .notEmpty()
        .withMessage("In Price is required")
        .isFloat({ gt: 0 })
        .withMessage("In Price must be a positive number"),
    body("inStock")
        .notEmpty()
        .withMessage("Stock is required")
        .isInt({ gt: 0 })
        .withMessage("Stock must be a positive integer"),
    body("unit")
        .notEmpty()
        .withMessage("Unit is required"),
];