import { Request, Response, NextFunction } from "express";
import { CatsService } from "../services/cats.service";
import { CreateCatInput } from "../schemas/cats.schema";

export class CatsController {
  constructor(private catsService: CatsService) {}

  async getAllCats(req: Request, res: Response, next: NextFunction) {
    try {
      const cats = await this.catsService.getAllCats();
      res.status(200).json(cats);
    } catch (error) {
      next(error);
    }
  }

  async createCat(req: Request, res: Response, next: NextFunction) {
    try {
      const data: CreateCatInput = req.body;
      const newCat = await this.catsService.createCat(data);
      res.status(201).json(newCat);
    } catch (error) {
      next(error);
    }
  }
}
