import { NextFunction, Request, Response } from "express";

export function isAuthenticated(req: Request, res: Response, next: NextFunction) {
    const {authorization} = req.headers

    console.log(authorization);

    return next();
}