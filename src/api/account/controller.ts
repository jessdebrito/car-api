import { Request, Response } from "express";

export class AccountController {
    public create = async ( req: Request, res: Response) => {
        return res.status(201).json({ message: "POST /accounts" });
    }
}