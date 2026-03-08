import { body } from "express-validator";

export const createUserValidation = [
    body("name")
        .notEmpty()
        .withMessage("Name is required"),
    body("email")
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Invalid email"),
    body("password")
        .isLength({ min: 8 })
        .withMessage("Password must be at least 8 characters"),
];