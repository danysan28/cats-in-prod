import { prisma } from "../lib/client";
import { CreateCatInput } from "../schemas/cats.schema";

export class CatsRepository {
  async getAllCats({ page, limit }: { page: number; limit: number }) {
    const skip = (page - 1) * limit;

    const [data, total] = await Promise.all([
      prisma.cat.findMany({
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
      }),
      prisma.cat.count(),
    ]);

    return {
      data,
      meta: { page, limit, total, totalPages: Math.ceil(total / limit) },
    };
  }

  async createCat(data: CreateCatInput) {
    return prisma.cat.create({
      data,
    });
  }
}
