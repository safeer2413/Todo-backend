import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import userRoute from "./routes/userRoutes.js";
import { notFound,errorHandler } from "./middleWare/errorMiddleware.js";
import cookieParser from "cookie-parser";
import adminRoute from "./routes/adminRoutes.js";


dotenv.config()


const app = express()

connectDb()

let port = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use('/api/users', userRoute)
app.use('/api/admin', adminRoute)


app.use(notFound)
app.use(errorHandler)


app.listen(port, () => {
    console.log(`Server Started on Port : ${port}`); 
})