import { Router } from "express";
import { uploadPostController, likePostController, commentPostController, getAllPostsController, getPostsByUserController } from "../controllers/postController.js";

const router = Router()

router.get("/post", getAllPostsController)
router.get("/:username/post", getPostsByUserController)

router.post("/post", uploadPostController)
router.post("/:postID/like", likePostController)
router.post("/:postID/comment", commentPostController)
export default router