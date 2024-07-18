import { Request, Response } from "express";
import { AccountService } from "./service";

export class AccountController {
    private accountService = new AccountService();
  
    public create = async (req: Request, res: Response) => {
      const account = await this.accountService.create(req.body);
  
      return res.status(201).json(account);
    };
  
    public findAll = async (req: Request, res: Response) => {
      const accounts = await this.accountService.findAll();
  
      return res.status(200).json(accounts);
    };
  
    public partialUpdate = async (req: Request, res: Response) => {
      const accounts = await this.accountService.partialUpdate(
        Number(req.params.id),
        req.body
      );
  
      return res.status(200).json(accounts);
    };
  }
  