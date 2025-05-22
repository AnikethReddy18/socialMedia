import { Router } from "express";
import { uploadPostController, likePostController, commentPostController, getAllPostsController } from "../controllers/postController.js";

const router = Router()

router.get("/post", getAllPostsController)
router.get("/:username/post", getAllPostsController)

router.post("/post", uploadPostController)
router.post("/:postID/like", likePostController)
router.post("/:postID/comment", commentPostController)
export default router