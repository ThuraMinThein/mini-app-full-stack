import jwtVerify from "../helper/jwt/jwtVerify.js";
import { UserService } from "../modules/user/user.service.js";

const userService = new UserService();

export const authMiddleware = async (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    try {
        const decoded = jwtVerify(token);
        const user = await userService.findById(decoded.id);
        req.user = user;
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    next();
}