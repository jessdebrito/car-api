import { prisma } from "../../../prisma/prisma.client";
import { accountCreate } from "./interfaces";
import * as bcrypt from  "bcryptjs";
import { hashPassword } from "./utils";
import { accountWithoutPasswordSchema } from "./schemas";

export class AccountService {
    public create = async (payload: accountCreate) => {
        payload.password = await bcrypt.hashSync(payload.password);

        const newAccount = await prisma.account.create({ data: payload });

        return accountWithoutPasswordSchema.parse(newAccount);
    };
}