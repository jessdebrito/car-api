import express, { json } from "express";
import "reflect-metadata";
import "express-async-errors";
import helmet from "helmet";
import { handleGlobalErrors } from "./api/@shared/errors";
import { initRoutes } from "./routes";

export const app = express();
app.use(express.json());
app.use(helmet());


initRoutes(app);

app.use(handleGlobalErrors);
