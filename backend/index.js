import express, { urlencoded } from "express"
import authRouter from "./routers/authRouter.js"

const app = express()
const PORT = process.env.PORT || 3000
app.use(urlencoded({ extended: true }))

app.get("/", (req, res) => res.send("Hello World!"))
app.use("/", authRouter)
app.listen(PORT, () => console.log('Listening at http://localhost:' + PORT))