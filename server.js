import express from "express";
import dotenv from 'dotenv'
dotenv.config()
import connectDb from "./config/db.js";
import userRoutes from "./Routes/userRoutes.js";
import todoRoutes from "./Routes/todoRoutes.js";
import cors from 'cors'
import { notFound, errorHandler } from './middlewares/errorMiddleware.js'
import cookieParser from "cookie-parser";
import path from 'path';

const app = express()
connectDb()

const port = process.env.PORT || 5001;

// ✅ CORS config

const allowedOrigins = [
    "http://localhost:5173", // local testing
    "https://todo-frontend-tawny-eta.vercel.app", // Vercel frontend
];

app.use(cors({
    origin: allowedOrigins,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
}));

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ✅ API routes
app.use('/api/todo', todoRoutes);
app.use('/api/users', userRoutes);

// ✅ Error handling
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
