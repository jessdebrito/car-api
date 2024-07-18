import express from  "express";
import "express-async-errors";
import { carRouter } from "./api/car";
import { accountRouter } from "./api/account";

export const app = express();

app.use(express.json());

app.use("/cars", carRouter)
app.use("/accounts", accountRouter)