import express from "express";
import dotenv from 'dotenv'
dotenv.config()
import connectDb from "./config/db.js";
import userRoutes from "./Routes/userRoutes.js";
import router from "./Routes/todoRoutes.js";
import cors from 'cors'
import { notFound, errorHandler } from './middlewares/errorMiddleware.js'
import cookieParser from "cookie-parser";
import path from 'path';

const app = express()
connectDb()

let port = process.env.PORT || 5001;
app.use(cors({
    origin: "https://todo-frontend-tawny-eta.vercel.app",
    credentials: true,
}));

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// API routes
app.use('/api/todo', router);
app.use('/api/users', userRoutes);

// Serve frontend static files
app.use(express.static(path.join(process.cwd(), 'Frontend/dist')));

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, 'Frontend/dist')));

// SPA fallback for frontend routes
app.get('*', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'Frontend/dist', 'index.html'));
});

// SPA fallback for non-API routes ONLY
app.get(/^\/(?!api).*/, (req, res) => {
    res.sendFile(path.join(__dirname, 'Frontend/dist', 'index.html'));
});

// Error handling
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})