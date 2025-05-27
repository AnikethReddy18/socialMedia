import { Router } from "express";
import { getUserController } from "../controllers/userController.js";

const router = Router()

router.get("/user/:username", getUserController)

export default router