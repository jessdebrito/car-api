import { z } from "zod";
import {
  userCreateSchema,
  userSchema,
  userUpdateSchema,
  userWithoutPasswordSchema,
} from "./schemas";

export type User = z.infer<typeof userSchema>;
export type UserCreate = z.infer<typeof userCreateSchema>;
export type UserUpdate = z.infer<typeof userUpdateSchema>;
export type UserWithoutPassword = z.infer<
  typeof userWithoutPasswordSchema
>;

export interface IUserService {
  findByEmail(email: string): Promise<User | null>;
  create(payload: UserCreate): Promise<UserWithoutPassword>;
  findAll(): Promise<UserWithoutPassword[]>;
  findById(id: number): Promise<UserWithoutPassword>;
  partialUpdate(
    id: number,
    payload: UserUpdate
  ): Promise<UserWithoutPassword>;
  delete(id: number): Promise<void>;
}