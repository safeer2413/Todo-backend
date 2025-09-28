import express from "express";
import dotenv from 'dotenv'
dotenv.config()
import connectDb from "./config/db.js";
import userRoutes from "./Routes/userRoutes.js";
import router from "./Routes/todoRoutes.js";
import cors from 'cors'
import { notFound, errorHandler } from './middlewares/errorMiddleware.js'
import cookieParser from "cookie-parser";


const app = express()
connectDb()

let port = process.env.PORT || 5001;
app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/todo', router);
app.use('/api/users', userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
    console.log('Server Started Succes');
})