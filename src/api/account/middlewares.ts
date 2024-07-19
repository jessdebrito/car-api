import { NextFunction, Request, Response } from "express";
import { ApiError } from "../@shared/errors";


export function isAccountOwner(
    req: Request,
    res: Response,
    next: NextFunction
  ) {

    const accountIdParam = req.params.id;

    const {accountId} = res.locals.log;

    if (accountIdParam !== accountId) {
      throw new ApiError("You dont have permission to perform this action", 403);
    }
  
    return next();
  }
  