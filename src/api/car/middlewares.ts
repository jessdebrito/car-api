import { NextFunction, Request, Response } from "express";
import { ForbiddenError } from "../@shared/errors";

export function isUserCarOwner(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const createdById = res.locals;

  if (res.locals.user.user.id !== createdById) {
    throw new ForbiddenError();
  }

  return next();
}