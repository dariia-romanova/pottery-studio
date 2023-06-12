import express from "express";
import ViteExpress from "vite-express";
import dotenv from "dotenv";
import mongoose from "mongoose";

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
})

mongoose.connection.on("connected", () => {
  console.log('mongoDB connected')
})


app.get("/hello", (_, res) => {
  res.send("Hello Vite + React + TypeScript!");
});

ViteExpress.listen(app, 3000, () => {
  connect();
  console.log("Server is listening on port 3000...")
});
