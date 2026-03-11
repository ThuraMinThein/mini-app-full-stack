import { body } from "express-validator";

export const updateProductValidation = [
    body("name")
        .isString()
        .withMessage("Name must be a string"),
    body("description")
        .isString()
        .withMessage("Description must be a string"),
    body("price")
        .isFloat({ gt: 0 })
        .withMessage("Price must be a positive number"),
    body("inPrice")
        .isFloat({ gt: 0 })
        .withMessage("In Price must be a positive number"),
    body("inStock")
        .isInt({ gt: 0 })
        .withMessage("Stock must be a positive integer"),
    body("unit")
        .isString()
        .withMessage("Unit must be a string"),
];