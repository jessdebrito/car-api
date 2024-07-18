import { Router } from "express";
import { AccountController } from "./controller";
import { validateBody } from "../@shared/validator/body.validator";
import { accountCreateSchema } from "./schemas";
import { isAuthenticated } from "../session/middleware";

export const accountRouter = Router();
const accountController = new AccountController();

accountRouter.post("", validateBody(accountCreateSchema), accountController.create);
accountRouter.get("", accountController.findAll);
accountRouter.patch("/:id", isAuthenticated,accountController.partialUpdate);
