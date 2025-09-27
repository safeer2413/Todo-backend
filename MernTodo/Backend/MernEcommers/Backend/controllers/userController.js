import Users from "../Model/userModel.js";
import bcrypt from 'bcrypt'
import asyncHandler from '../middleWare/asyncHandler.js'
import jwt from "jsonwebtoken";


const registerUser = asyncHandler(async (req, res) => {
    const { name, email, mobileNumber, password } = req.body

    const salt = await bcrypt.genSalt(10)
    const bcryptedpassword = await bcrypt.hash(password, salt)

    const userExists = await Users.findOne({ email: email })
    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    const user = await Users.create({
        name,
        email,
        mobileNumber,
        password: bcryptedpassword,
    }) 

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            mobileNumber: user.mobileNumber,
        })

        console.log('user.isAdmin is::', isAdmin)

    }
    else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})

const authUser = asyncHandler(async (req, res) => {

    const { email, password } = req.body

    const user = await Users.findOne({ email })

    if (user && (await user.matchPassword(password))) {


        const token = jwt.sign({ userId: user._id }, process.env.JwT_SECRET, { expiresIn: '1d' })

        res.cookie('jwt', token, {
            httpOnly: true,
            secure: false,
            sameSite: 'strict',
            naxAge: 24 * 60 * 60 * 1000
        })

        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            mobileNumber: user.mobileNumber,
            isAdmin: user.isAdmin
        })
    }
    else {
        res.status(400)
        throw new Error('User not fount')
    }
})

export {
    registerUser,
    authUser
}