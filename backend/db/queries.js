import pkg from '@prisma/client';
const { PrismaClient } = pkg;

const prisma = new PrismaClient();

export async function createUser(username, password, firstName, lastName, profilePic) {
    await prisma.user.create({
        data: {
            username, password, firstName, lastName, profilePic
        }
    })
}

export async function getUser(username){
    const user = await prisma.user.findUnique({
        where: {
            username
        }
    })

    return user
}


export async function uploadPost(content, authorUsername){
    await prisma.post.create({
        data: {
            content, authorUsername
        }
    })
}

export async function likePost(username, postID) {
    await prisma.like.create({
        data:{
            username, postID
        }
    })
}

export async function comment(authorUsername, postID, content){
    await prisma.comment.create({
        data:{
            authorUsername, postID, content
        }
    })
}

export async function getAllPosts(){
    const posts = await prisma.post.findMany({
        include:{
            likes: true, 
            comments: true
        }
    })

    return posts
}

export async function getPostsByUser(authorUsername){
    const posts = await prisma.post.findMany({
        where:{
            authorUsername
        },
        include:{
            likes: true, 
            comments: true
        }
    })

    return posts
}