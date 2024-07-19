import supertest from "supertest";
import { app } from "../../../app";
 import 'reflect-metadata';
 import { prisma } from "../../../../prisma/prisma.client";

 
 
export const request = supertest(app);
 

beforeEach(async () => {
   await prisma.$transaction([ prisma.car.deleteMany() ]);
});