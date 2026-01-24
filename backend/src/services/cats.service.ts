import { CatsRepository } from "../repositories/cats.repository";
import { CreateCatInput } from "../schemas/cats.schema";

export class CatsService {
  constructor(private catsRepo: CatsRepository) {}

  async getAllCats({ page, limit }: { page: number; limit: number }) {
    return this.catsRepo.getAllCats({ page, limit });
  }

  async createCat(data: CreateCatInput) {
    return this.catsRepo.createCat(data);
  }
}
