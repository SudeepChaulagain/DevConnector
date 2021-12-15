import User from '../models/User.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import gravatar from 'gravatar'

export const login = async (req, res) => {
   
    const {email, password} = req.body

    try {
        const existingUser = await User.findOne({email})

        if(!existingUser) return res.status(400).json({
            message:'Invalid credentials!',
            data: null,
            success: false
        }) 
    
        const isPasswordCorrect =  await bcrypt.compare(password, existingUser.password)
    
        if(!isPasswordCorrect) return res.status(400).json({
            message:'Invalid credentials!',
            data: null,
            success: false
        }) 
    
        const payload = {
            email: existingUser.email,
            id: existingUser._id
        }
    
        const secret = process.env.SECRET_KEY
    
        const token = jwt.sign(payload, secret, {expiresIn: "1h"})
    
        res.cookie('token', token, {httpOnly: true})
    
        res.status(200).json({
            message:'Logged In successfully!',
            token,
            data: {
                user:{
                    id: existingUser._id,
                    name: existingUser.name,
                    avatar: existingUser.avatar,
                    email: existingUser.email 
                }
            }
        })
    } catch (error) {
        console.log(error)
    }
}

export const register = async (req, res) => {

    const {email, name, password} = req.body

    const avatar = gravatar.url(email, {
        s: "200",
        r: "pg",
        d: "mm"
    })

    try {

        const existingUser = await User.findOne({email})

        if(existingUser) 
            return res.status(400).json({
            message: 'Email already is in use!',
            data: null,
            success: false
            
        })

        const hashedPassword = await bcrypt.hash(password, 12)

        const result = await User.create({
            name,
            avatar,
            email,
            password: hashedPassword
        })

        const payload = {
            email: result.email,
            id: result._id
        }

        const secret = process.env.SECRET_KEY

        const token = jwt.sign(payload, secret, {expiresIn: "1h"})

        res.cookie('token', token, {httpOnly: true})

        return res.status(201).json({
            message:"User created successfully!",
            token,
            data: {
                user:{
                    id: result._id,
                    name: result.name,
                    avatar: result.avatar,
                    email: result.email
                  
                }
            },
            success: true
        })
        
    } catch (error) {
        console.log(error)
    }
}
