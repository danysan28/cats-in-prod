import { CatsRepository } from "../repositories/cats.repository";
import { CreateCatInput } from "../schemas/cats.schema";

export class CatsService {
  constructor(private catsRepo: CatsRepository) {}

  async getAllCats() {
    return this.catsRepo.getAllCats();
  }

  async createCat(data: CreateCatInput) {
    return this.catsRepo.createCat(data);
  }
}
