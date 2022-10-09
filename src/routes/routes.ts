import { Router } from "express";
import { createUnmannedSpacecraft } from "../controller/spaceship.controller";

const router = Router();

router.post("/spaceship/create/unmannedspacecraft", createUnmannedSpacecraft);

export default router;
