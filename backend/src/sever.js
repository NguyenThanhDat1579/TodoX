import express from "express";
import taskRouter from "./routes/tasksRouters.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const POST = process.env.POST || 5001;

const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use("/api/tasks", taskRouter);

connectDB().then(() => {
  app.listen(POST, () => {
    console.log("Sever bắt đầu trên cổng 5001");
  });
});
