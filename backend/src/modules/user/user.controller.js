import { validationResult } from "express-validator";
import { UserService } from "./user.service.js";

export class UserController {

    async signIn(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        res.status(200).json({ message: "Success" });
    }

    async createUser(req, res) {
        const user = await UserService.createUser(req.user);
        res.status(201).json(user);
    }

}