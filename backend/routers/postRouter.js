import { Router } from "express";
import { uploadPostController, likePostController, commentPostController } from "../controllers/postController.js";

const router = Router()

router.post("/post", uploadPostController)
router.post("/:postID/like", likePostController)
router.post("/:postID/comment", commentPostController)

export default router