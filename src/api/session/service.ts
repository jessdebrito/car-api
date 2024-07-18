import { prisma } from "../../../prisma/prisma.client";
import { SessionLogin } from "./interfaces";

export class SessionService {
    public login = async (payload: SessionLogin) => {
        const account = await prisma.account.findUnique({ 
            where: { email: payload.email },
    });
        return ({ message: "POST /login"});
    };
}