import { Router } from "express";
import { uploadPostController } from "../controllers/postController.js";

const router = Router()

router.post("/post", uploadPostController)

export default router