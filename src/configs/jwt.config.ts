import jwt from "jsonwebtoken";
import { parsedEnv } from "./env.config";

export function generateToken(payload: object = {}, userId: number) {
    const secret = parsedEnv.JWT_SECRET;

    return jwt.sign(payload, secret, {
        expiresIn: "1h",
        subject: String(userId),
    });
}

export function verifyToken(token: string) {
    const secret = parsedEnv.JWT_SECRET;

    const { sub } = jwt.verify(token, secret);

    return sub;
}
