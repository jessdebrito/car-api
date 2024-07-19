import { Request, Response } from "express";
import { ICarService } from "./interface";
import { inject, injectable } from "tsyringe";


@injectable()
export class CarController {
  constructor(
    @inject("CarService") private carService: ICarService
  ) { }


  public create = async (req: Request, res: Response) => {
    const car = await this.carService.create(req.body);

    return res.status(201).json(car);
  };


  public findAll = async (req: Request, res: Response) => {
    const cars = await this.carService.findAll();

    return res.status(200).json(cars);
  };


  public findById = async (req: Request, res: Response) => {
    const car = await this.carService.findById(Number(req.params.id));

    return res.status(200).json(car);
  };

  public partialUpdate = async (req: Request, res: Response) => {
    const cars = await this.carService.partialUpdate(
      Number(req.params.id),
      req.body
    );

    return res.status(200).json(cars);
  };

  public delete = async (req: Request, res: Response) => {
    await this.carService.delete(Number(req.params.id));
  };

}