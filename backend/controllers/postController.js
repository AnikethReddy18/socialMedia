import { uploadPost } from "../db/queries.js";

export async function uploadPostController(req, res){
    const { content } = req.body
    const { username } = req.user

    await uploadPost(content, username)
    res.sendStatus(200)
}