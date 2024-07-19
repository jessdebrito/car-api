import { prisma } from "../../../prisma/prisma.client";
import { generateToken } from "../../configs";
import { ApiError } from "../@shared/errors";
import { SessionLogin } from "./interfaces";
import * as bcrypt from "bcryptjs";

export class SessionService {
    public login = async (payload: SessionLogin) => {
        const account = await prisma.account.findUnique({
            where: { email: payload.email },
        });

        if (!account) {
            throw new ApiError("E-mail and password doesn't match", 401)
        };

        const passwordMatch = await bcrypt.compare(
            payload.password,
            account.password
        );

        if (!passwordMatch) {
            throw new ApiError("E-mail and password doesn't match", 401)
        };

        const token = generateToken({ name: account.name }, account.id);

        return token;
    };
}