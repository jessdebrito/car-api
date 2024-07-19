import { Router } from "express";
import { UserController } from "./controller";
import { validateBody } from "../@shared/validator";
import { userCreateSchema, userUpdateSchema } from "./schemas";
import { isAuthenticated } from "../session/middleware";
import { isUserOwner } from "./middlewares";
import { UserService } from "./service";
import { container } from "tsyringe";


export const userRouter = Router();

container.registerSingleton("UserService", UserService);

const userController = container.resolve(UserController);

userRouter.post(
  "",
  validateBody(userCreateSchema),
  userController.create
);

userRouter.get("", userController.findAll);

userRouter.get("/:id", userController.findById);

userRouter.patch(
  "/:id",
  isAuthenticated,
  isUserOwner,
  validateBody(userUpdateSchema),
  userController.partialUpdate
);