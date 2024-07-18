import { prisma } from "../../../prisma/prisma.client";
import { ApiError } from "../@shared/errors";
import { SessionLogin } from "./interfaces";
import * as bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export class SessionService {
    public login = async (payload: SessionLogin) => {
        const account = await prisma.account.findUnique({
            where: { email: payload.email },
        });

        if (!account) {
            throw new ApiError("Invalid credentials", 401)
        };

        const passwordMatch = await bcrypt.compare(
            payload.password,
            account.password
        );

        if (!passwordMatch) {
            throw new ApiError("Invalid credentials", 401)
        };

        const secret = process.env.JWT_SECRET as string;

        const token = jwt.sign(
            { fullName: account.fullName },
            secret,
            {
                expiresIn: "1m",
                subject: account.id.toString()
            });

        return token;
    };
}