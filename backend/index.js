import express, { urlencoded } from "express"
import authRouter from "./routers/authRouter.js"
import postRouter from "./routers/postRouter.js"
import authMiddleware from "./middlewares/authMiddleware.js"
import cors from "cors"

const app = express()
const PORT = process.env.PORT || 3000
app.use(urlencoded({ extended: true }))
app.use(cors)

app.get("/", authMiddleware, (req, res) => res.send({user: req.user}))
app.use("/", authRouter)
app.use("/", authMiddleware, postRouter)
app.listen(PORT, () => console.log('Listening at http://localhost:' + PORT))