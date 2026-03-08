import jwt from "jsonwebtoken";

const secretKey = process.env.JWT_SECRET;

const jwtVerify = (token) => {
    const payload = jwt.verify(token, secretKey);
    if (payload.exp < Date.now() / 1000) {
        throw new Error();
    }
    return payload;
}

export default jwtVerify;