import { NextFunction, Request, Response } from "express";
import { ForbiddenError } from "../@shared/errors";


export function isAccountOwner(
  req: Request,
  res: Response,
  next: NextFunction
) {

  const accountIdParam = req.params.id;


  const { accountId } = res.locals;


  if (accountIdParam !== accountId) {
    throw new ForbiddenError();
  }

  return next();
}