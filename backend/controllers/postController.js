import { uploadPost, likePost, comment, getAllPosts, getPostsByUser } from "../db/queries.js";

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

export async function getAllPostsController(req, res){
    const posts = await getAllPosts()
    res.send(posts)
}

export async function getPostsByUserController(req, res){
    const username = req.params.username
    const posts = await getPostsByUser(username)
    res.send(posts)
}