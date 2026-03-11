import { body } from "express-validator";

export const updateProductValidation = [
    body("name")
        .optional()
        .isString()
        .withMessage("Name must be a string"),
    body("description")
        .optional()
        .isString()
        .withMessage("Description must be a string"),
    body("price")
        .optional()
        .isFloat({ gt: 0 })
        .withMessage("Price must be a positive number"),
    body("inPrice")
        .optional()
        .isFloat({ gt: 0 })
        .withMessage("In Price must be a positive number"),
    body("inStock")
        .optional()
        .isInt({ gt: 0 })
        .withMessage("Stock must be a positive integer"),
    body("unit")
        .optional()
        .isString()
        .withMessage("Unit must be a string"),
];