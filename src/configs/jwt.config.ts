import jwt from "jsonwebtoken";

export function generateToken(payload: object = {}, userId: number) {
    const secret = process.env.JWT_SECRET as string;

    return jwt.sign(payload, secret, {
        expiresIn: "1h",
        subject: String(userId),
    });
}

export function verifyToken(token: string) {
    const secret = process.env.JWT_SECRET as string;
    const { sub } = jwt.verify(token, secret);
    return sub
}