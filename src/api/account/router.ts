import { Router } from "express";
import { AccountController } from "./controller";
import { validateBody } from "../@shared/validator/body.validator";
import { accountCreateSchema, accountUpdateSchema } from "./schemas";
import { isAuthenticated } from "../session/middleware";
import { isAccountOwner } from "./middlewares";

export const accountRouter = Router();
const accountController = new AccountController();

accountRouter.post("", validateBody(accountCreateSchema), accountController.create);
accountRouter.get("", accountController.findAll);
accountRouter.patch(
    "/:id",
    isAuthenticated,
    isAccountOwner,
    validateBody(accountUpdateSchema),
    accountController.partialUpdate
  );
