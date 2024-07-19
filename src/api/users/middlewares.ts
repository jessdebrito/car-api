import { NextFunction, Request, Response } from "express";
import { ForbiddenError } from "../@shared/errors";


export function isUserOwner(
  req: Request,
  res: Response,
  next: NextFunction
) {

  const userIdParam = req.params.id;


  const { userId } = res.locals;


  if (userIdParam !== userId) {
    throw new ForbiddenError();
  }

  return next();
}