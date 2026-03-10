import hashCheck from "../../helper/hash/hashCheck.js";
import hashGenerate from "../../helper/hash/hashGenerate.js";
import generateAccessToken from "../../helper/jwt/jwtGenerate.js";
import { UserRepository } from "./user.repository.js";

export class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }

    async createUser(data) {
        const hasUser = await this.userRepository.findByEmail(data.email);
        if (hasUser) {
            throw new Error("Invalid Email, please try again with a different email.");
        }
        data.password = await hashGenerate(data.password);
        const user = await this.userRepository.create(data);
        const accessToken = generateAccessToken({ id: user.id });
        return { ...this.serializeUser(user), accessToken }
    }

    async signIn(email, password) {
        const user = await this.userRepository.findByEmail(email);
        if (!user) {
            throw new Error("Invalid Credential");
        }
        const isMatch = await hashCheck(user.password, password);
        if (!isMatch) {
            throw new Error("Invalid Credential");
        }
        const accessToken = generateAccessToken({ id: user.id });
        return { ...this.serializeUser(user), accessToken };
    }

    async findById(id) {
        const user = await this.userRepository.findById(id);
        if (!user) {
            throw new Error("User not found");
        }
        return this.serializeUser(user);
    }

    serializeUser(user) {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt
        };
    }

}