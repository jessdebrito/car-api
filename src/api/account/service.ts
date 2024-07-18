import { prisma } from "../../../prisma/prisma.client";
import { AccountCreate } from "./interfaces";
import * as bcrypt from "bcryptjs";
import { accountWithoutPasswordSchema } from "./schemas";
import { hashPassword } from "./utils";


export class AccountService {
  public create = async (payload: AccountCreate) => {
    payload.password = await hashPassword(payload.password);
    const newAccount = await prisma.account.create({ data: payload });

    return accountWithoutPasswordSchema.parse(newAccount);
  };

  public findAll = async () => {
    const accounts = await prisma.account.findMany();
    return accountWithoutPasswordSchema.array().parse(accounts);
  };


  public partialUpdate = async (
    id: number, payload: Partial<AccountCreate>
  ) => {
    return { message: "PATCH /accounts/:id" }

  };
}