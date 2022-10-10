import { Router } from "express";
import {
  createSpaceship,
  getAllSpaceships,
} from "../controller/spaceship.controller";

const router = Router();

router.post("/spaceship/create", createSpaceship);
router.get("/spaceship/get/all", getAllSpaceships);

export default router;
