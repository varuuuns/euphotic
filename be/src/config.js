import { configDotenv } from "dotenv";
configDotenv();

export const MONGO_URL = process.env.MONGO_URL;
export const FRONTEND_URL = process.env.FRONTEND_URL;
export const PORT = process.env.PORT;