import express, { urlencoded } from "express"
import authRouter from "./routers/authRouter.js"
import authMiddleware from "./middlewares/authMiddleware.js"

const app = express()
const PORT = process.env.PORT || 3000
app.use(urlencoded({ extended: true }))

app.get("/", authMiddleware, (req, res) => res.send({user: req.user}))
app.use("/", authRouter)
app.listen(PORT, () => console.log('Listening at http://localhost:' + PORT))