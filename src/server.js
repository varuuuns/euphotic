import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import http from "http";
import { FRONTEND_URL, MONGO_URL, PORT } from "./config";
import dishRoutes from "./routes/dishRoutes";

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: FRONTEND_URL
    }
})

mongoose.connect(MONGO_URL)
    .then(() => { console.log(`mongodb connected`) })
    .catch((err) => { console.log(`error connecting mongodb: ${err}`) });


app.use("/api/v1/dishes", dishRoutes(io));

server.listen(PORT, console.log(`listening on port: ${PORT}`));