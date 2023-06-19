import express from "express";
import ViteExpress from "vite-express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth";
import coursesRoute from "./routes/courses";
import usersRoute from './routes/users';

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

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/courses", coursesRoute);

ViteExpress.listen(app, 3000, () => {
  connect();
  console.log("Server is listening on port 3000...")
});
