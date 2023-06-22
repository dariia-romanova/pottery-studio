import express from "express";
import { Request, Response, NextFunction } from "express";
import ViteExpress from "vite-express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth";
import coursesRoute from "./routes/courses";
import usersRoute from './routes/users';
import cookieParser from "cookie-parser";

declare global {
  namespace Express {
    interface Request {
       user?: {
        id: string,
        isAdmin: boolean,
       }
    }
  }
}


const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO ?? '');
    console.log("Connected to mongoDB")
  } catch (error) {
    throw error;
  }  
}

mongoose.connection.on("disconected", () => {
  console.log('mongoDB disconnected')
});
//middlewares
app.use(cookieParser());

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/courses", coursesRoute);

interface Error {
  status?: number,
  message?: string,
  stack?: any,
}

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || 'Something went wrong';

  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack
  })
})

ViteExpress.listen(app, 3000, () => {
  connect();
  console.log("Server is listening on port 3000...")
});
