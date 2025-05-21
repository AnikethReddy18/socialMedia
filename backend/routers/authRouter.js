import { Router } from "express";
import { signupValidators, signupController, loginController} from "../controllers/authController.js"

const router = Router()

router.post("/signup", signupValidators, signupController)
router.post("/login", loginController)

export default router