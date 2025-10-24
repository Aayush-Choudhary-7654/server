import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/db.js";
import userRoutes from "./userRoutes/userRoutes.js";
import cors from "cors";

dotenv.config();

const app = express();

app.use(express.json());

app.use(cors({
  origin: process.env.FRONTEND_URI,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));

connectDB();

app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Server is running and DB is connected!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.get("/api/test", (req, res) => {
  res.json({ message: "Hello World" });
});