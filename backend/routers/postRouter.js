import { Router } from "express";
import { uploadPostController, likePostController } from "../controllers/postController.js";

const router = Router()

router.post("/post", uploadPostController)
router.post("/:postID/like", likePostController)
export default router