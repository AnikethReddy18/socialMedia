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