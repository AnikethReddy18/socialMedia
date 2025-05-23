import bcrypt from "bcrypt"
import { validationResult, body } from "express-validator"
import { createUser, getUser } from "../db/queries.js"
import jwt from "jsonwebtoken"

export const signupValidators = [
    body("username").isLength({min: 6}).withMessage("Username must have 6 characters atleast"),
    body("password").isLength({min: 6}).withMessage("Password must have 6 characters atleats")
]

export async function signupController(req, res){
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    const {username, password} = req.body
    const {firstName, lastName} = req.body
    const profilePic = process.env.DEFAULT_PROFILE_PIC
    
    const encryptedPassword = await bcrypt.hash(password, 9)

    const user = await getUser(username)
    if(user) return res.status(400).json({errors: ["Username is taken already"]})
    await createUser(username, encryptedPassword, firstName, lastName, profilePic)

    res.sendStatus(200)
}

export async function loginController(req, res){
    const {username, password} = req.body
    if(!username || !password) return res.status(401).json({error: "Fill field(s)"}) 

    const user = await getUser(username)
    if(!user) return res.status(401).json({error: "Username does not exist"})

    const verified = bcrypt.compareSync(password, user.password)
    if(!verified) return res.status(401).json({error: "Wrong password"})

    jwt.sign(user, process.env.SECRET, (err, token)=>{
        res.send({token})
    })
}