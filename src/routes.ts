import { userRouter } from "./api/users";
import { Express, Router } from "express";
import { sessionRouter } from "./api/session";
import { carRouter } from "./api/car";

export function initRoutes(app: Express) {
  const v1Router = Router();

  // /api/v1/users
  v1Router.use("/v1/users", userRouter);
  v1Router.use("/v1/login", sessionRouter);
  v1Router.use("/v1/cars", carRouter);

  app.use("/api", v1Router);
}
