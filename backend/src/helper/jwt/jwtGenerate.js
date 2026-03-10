import jwt from "jsonwebtoken";

const secretKey = process.env.JWT_SECRET;
const secretKeyExpiresIn = process.env.JWT_SECRET_EXPIRES_IN;

const generateAccessToken = (payload) => {
    const token = jwt.sign(
        payload,
        secretKey,
        { expiresIn: secretKeyExpiresIn }
    )
    return token;
}

export default generateAccessToken;

