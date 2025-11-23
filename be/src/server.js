import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";
import dishRoutes from "./routes/dishRoutes.js";
import { FRONTEND_URL, MONGO_URL, PORT } from "./config.js";

dotenv.config();
const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: FRONTEND_URL } });

app.use(cors());
app.use(express.json());

mongoose.connect(MONGO_URL)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error(err));

app.use("/api/v1/dishes", dishRoutes(io));

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));