import { Router } from "express";
import { CarController } from "./controller";
import { validateBody } from "../@shared/validator";
import { carCreateSchema, carUpdateSchema } from "./schemas";
import { isUserCarOwner } from "./middlewares";
import { CarService } from "./service";
import { container } from "tsyringe";

export const carRouter = Router();

container.registerSingleton("CarService", CarService);
const carController = container.resolve(CarController);

carRouter.post(
  "",
  validateBody(carCreateSchema),
 carController.create
);

carRouter.get("", carController.findAll);

carRouter.get("/:id", carController.findById);

carRouter.patch(
  "/:id",
  isUserCarOwner,
  validateBody(carUpdateSchema),
  carController.partialUpdate
);
