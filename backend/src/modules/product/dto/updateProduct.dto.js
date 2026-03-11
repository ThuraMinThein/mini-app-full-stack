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
        .isFloat({ min: 0 })
        .withMessage("Price must be a positive number")
        .toFloat(),
    body("inPrice")
        .optional()
        .isFloat({ min: 0 })
        .withMessage("In Price must be a positive number")
        .toFloat(),
    body("inStock")
        .optional()
        .isInt({ min: 0 })
        .withMessage("Stock must be a positive integer")
        .toInt(),
    body("unit")
        .optional()
        .isString()
        .withMessage("Unit must be a string"),
];