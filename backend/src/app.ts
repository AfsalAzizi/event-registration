import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import router from "./routes/EventRoutes";
import cors from "cors";

dotenv.config();

connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/events", router);

app.get("/", (_req, res) => {
  res.send({
    message: "App is running...",
  });
});

export default app;
