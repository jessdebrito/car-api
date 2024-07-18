import { accountRouter } from "./api/account";
import { Express, Router } from "express";

export function initRouters(app: Express) {
    const v1Router = Router();

    // /api/v1/accounts
    v1Router.use("/v1/accounts", accountRouter);

    app.use("/api", v1Router);
    app.use("/api", v1Router);
}
