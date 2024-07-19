import { prisma } from "../../../prisma/prisma.client";
import {  Car ,CarCreate, CarUpdate } from "./interface";
import { CarNotFoundError } from "./error";
import { injectable } from "tsyringe";
import { carSchema } from "./schemas";

@injectable()
export class CarService  {
    
    public create = async (payload: CarCreate) => {

        const car = await prisma.car.create({ data: payload });

        return car;
    };

    public findAll = async () => {
        const cars = await prisma.car.findMany();
        return cars;
    };

    public findById = async (id: number) => {
        const car = await prisma.car.findUnique({ where: { id } });

        if (!car) {
            throw new CarNotFoundError();
        }

        return car;
    };

    public partialUpdate = async (id: number, payload: CarUpdate) => {
        await this.findById(id);

        const updatedCar = await prisma.car.update({
            data: payload,
            where: { id },
        });

        return updatedCar;
    };


    public delete = async (id: number) => {

    };
}