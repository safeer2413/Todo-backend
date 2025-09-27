import express from "express";
import { authUser, registerUser } from '../controllers/userController.js'

const userRoute = express.Router()


userRoute.post('/', authUser)
userRoute.post('/register', registerUser)


export default userRoute