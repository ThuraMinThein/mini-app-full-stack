import { validationResult } from "express-validator";
import { UserService } from "./user.service.js";

const userService = new UserService();

export class UserController {

    async signIn(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const userWithToken = await userService.signIn(req.body.email, req.body.password);
            res.status(200).json({ ...userWithToken });
        } catch (error) {
            res.status(401).json({ error: error.message });
        }
    }

    async createUser(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            const user = await userService.createUser(req.body);
            res.status(201).json(user);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getMe(req, res) {
        const user = req.user;
        res.status(200).json(user);
    }

}