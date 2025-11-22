import { io } from "socket.io-client";
import { VITE_BACKEND_URL } from "./config";

const socket = io(VITE_BACKEND_URL);

export default socket;