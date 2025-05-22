import { uploadPost, likePost, comment } from "../db/queries.js";

export async function uploadPostController(req, res){
    const { content } = req.body
    const { username } = req.user

    await uploadPost(content, username)
    res.sendStatus(200)
}

export async function likePostController(req, res){
    const { username } = req.user
    const postID = parseInt(req.params.postID)

    await likePost(username, postID)
    res.sendStatus(200)
}

export async function commentPostController(req, res){
    const { username } = req.user
    const postID = parseInt(req.params.postID)
    const { content } = req.body
    
    await comment(username, postID, content)
    res.sendStatus(200)
}