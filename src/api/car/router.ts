import { Router } from "express";
import { CarController } from "./controller";

export const carRouter = Router();
const carController = new CarController();
carRouter.post("", carController.create);