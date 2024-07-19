import { Request, Response } from "express";
import { IUserService } from "./interfaces";
import { inject, injectable } from "tsyringe";

@injectable()
export class UserController {

  constructor(
    @inject("UserService") private userService: IUserService
  ) { }

  public create = async (req: Request, res: Response) => {
    const user = await this.userService.create(req.body);

    return res.status(201).json(user);
  };
  
  public findAll = async (req: Request, res: Response) => {
    const users  = await this.userService.findAll();

    return res.status(200).json(users);
  };

  public findById = async (req: Request, res: Response) => {
    const user = await this.userService.findById(Number(req.params.id));

    return res.status(200).json(user);
  };

  public partialUpdate = async (req: Request, res: Response) => {
    const users = await this.userService.partialUpdate(
      Number(req.params.id),
      req.body
    );

    return res.status(200).json(users);
  };

  public delete = async (req: Request, res: Response) => {
    await this.userService.delete(Number(req.params.id));
  };

} 