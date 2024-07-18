import { prisma } from "../../../prisma/prisma.client";
import { AccountCreate, AccountUpdate } from "./interfaces";
import { hashPassword } from "./utils";
import { accountWithoutPasswordSchema } from "./schemas";
import { ApiError } from "../@shared/errors";

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

  public findById = async (id: number) => {
    const account = await prisma.account.findUnique({ where: { id } });

    if (!account) {
      throw new ApiError("User not found", 404);
    }

    return account;
  };

  public partialUpdate = async (id: number, payload: AccountUpdate) => {
    await this.findById(id);

    const updatedAccount = await prisma.account.update({
      data: payload,
      where: { id },
    });

    return accountWithoutPasswordSchema.parse(updatedAccount);
  };
}
