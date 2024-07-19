import { prisma } from "../../../prisma/prisma.client";
import { UserCreate, UserUpdate, IUserService } from "./interfaces";
import { hashPassword } from "./utils";
import { userWithoutPasswordSchema } from "./schemas";
import { UserNotFoundError, EmailAlreadyUsedError } from "./errors";
import { injectable } from "tsyringe";

@injectable()
export class UserService implements IUserService {
  public findByEmail = async (email: string) => {
    const user = prisma.user.findUnique({ where: { email } });

    return user;
  };

  public create = async (payload: UserCreate) => {
    const hasDuplicatedEmail = await this.findByEmail(payload.email);

    if (hasDuplicatedEmail) {
      throw new EmailAlreadyUsedError();
    }

    payload.password = await hashPassword(payload.password);
    const newUser = await prisma.user.create({ data: payload });

    return userWithoutPasswordSchema.parse(newUser);
  };

  public findAll = async () => {
    const users = await prisma.user.findMany();

    return userWithoutPasswordSchema.array().parse(users);
  };

  public findById = async (id: number) => {
    const user = await prisma.user.findUnique({ where: { id } });

    if (!user) {
      throw new UserNotFoundError();
    }

    return userWithoutPasswordSchema.parse(user);
  };

  public partialUpdate = async (id: number, payload: UserUpdate) => {
    await this.findById(id);

    if (payload.email) {
      const hasDuplicatedEmail = await this.findByEmail(payload.email);

      if (hasDuplicatedEmail) {
        throw new EmailAlreadyUsedError();
      }
    }

    if (payload.password) {
      payload.password = await hashPassword(payload.password);
    }

    const updatedUser = await prisma.user.update({
      data: payload,
      where: { id },
    });

    return userWithoutPasswordSchema.parse(updatedUser);
  };

  public delete = async (id: number) => {
    
  };
}