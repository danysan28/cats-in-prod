import { Router } from "express";
import { CatsController } from "../controllers/cats.controller";
import { CatsService } from "../services/cats.service";
import { CatsRepository } from "../repositories/cats.repository";
import { validate } from "../middleware/validate.middleware";
import { createCatSchema } from "../schemas/cats.schema";

const router = Router();

const catsRepository = new CatsRepository();
const catsService = new CatsService(catsRepository);
const catsController = new CatsController(catsService);

router.get("/", catsController.getAllCats.bind(catsController));
router.post(
  "/",
  validate(createCatSchema),
  catsController.createCat.bind(catsController),
);

export default router;
