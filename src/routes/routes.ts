import { Router } from "express";
import { createSpaceship } from "../controller/spaceship.controller";

const router = Router();

router.post("/spaceship/create", createSpaceship);

export default router;
