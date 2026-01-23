import { Router, Request, Response } from "express";
import { prisma } from "../lib/client";
const router = Router();

// GET /cats - Retrieve all cats
router.get("/", async (_req: Request, res: Response) => {
  try {
    const cats = await prisma.cat.findMany({ orderBy: { createdAt: "desc" } });

    res.json(cats);
  } catch (error) {
    res.status(500).json({ error: "Error fetching cats" });
  }
});

export default router;
