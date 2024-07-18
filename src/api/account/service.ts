import { prisma } from "../../../prisma/prisma.client";
import { accountCreate } from "./interfaces";
import * as bcrypt from  "bcryptjs";

export class AccountService {
    public create = async (payload: accountCreate) => {
        payload.password = await bcrypt.hash(payload.password, 10)

        const newAccount = await prisma.account.create({ data: payload });

        return newAccount;
    }
}