import express from  "express";
import "express-async-errors";
import { initRouters } from "./routes";
import { handleGlobalErrors } from "./api/@shared/errors";


export const app = express();

app.use(express.json());

initRouters(app);

app.use(handleGlobalErrors);
