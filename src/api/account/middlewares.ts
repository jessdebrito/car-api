import { NextFunction, Request, Response } from "express";
import { ApiError } from "../@shared/errors";


export function isAccountOwner(
    req: Request,
    res: Response,
    next: NextFunction
  ) {

    const accountId = req.params.id;
  
    const decodedJwtPayload = res.locals.decodedJwtPayload;
  
    console.log("URL PARAM ID:", accountId);
    console.log("TYPEOF URL PARAM ID:", typeof accountId);
    console.log("PAYLOAD:", decodedJwtPayload);

    if (accountId !== decodedJwtPayload.sub) {
      throw new ApiError("You dont have permission to perform this action", 403);
    }
  
    return next();
  }
  