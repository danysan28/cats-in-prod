import { prisma } from "../lib/client";
import { CreateCatInput } from "../schemas/cats.schema";

export class CatsRepository {
  async getAllCats() {
    return prisma.cat.findMany({
      orderBy: { createdAt: "desc" },
    });
  }

  async createCat(data: CreateCatInput) {
    return prisma.cat.create({
      data,
    });
  }
}
