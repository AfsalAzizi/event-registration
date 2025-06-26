import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import eventRouter from "./routes/EventRoutes";
import authRouter from "./routes/AuthRoutes";
import cors from "cors";

dotenv.config();

connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/events", eventRouter);
app.use("/api/auth", authRouter);

app.get("/", (_req, res) => {
  res.send({
    message: "App is running...",
  });
});

export default app;
