import { z } from "zod";
import {
    carCreateSchema,
    carSchema,
    carUpdateSchema,
} from "./schemas";

export type TCar = z.infer<typeof carSchema>;
export type TCarCreate = z.infer<typeof carCreateSchema>;
export type TCarUpdate = z.infer<typeof carUpdateSchema>;




 export interface ICarService {

    create(payload: CarCreate): Promise<Car>;

    findAll(): Promise<Car[]>;
    findById(id: number): Promise<Car | null>;
//     findByUser(user: string): Promise<Car[] | null>;

    partialUpdate(
        id: number,
        payload: CarUpdate
    ): Promise<CarUpdate>;

    delete(id: number): Promise<void>;
}