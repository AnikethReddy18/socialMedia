import { getUser } from "../db/queries.js";

export async function getUserController(req, res){
    const username = req.params.username
    const userData = await getUser(username)
    res.send(userData)
}