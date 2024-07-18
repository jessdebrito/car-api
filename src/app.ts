import express from  "express";
import "express-async-errors";
import { initRouters } from "./routes";


export const app = express();

app.use(express.json());

initRouters(app)