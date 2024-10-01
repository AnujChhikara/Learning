import app from "./app.js";
import dotenv from "dotenv";
import http from "http";
import { Server } from "socket.io";

dotenv.config({
  path: "././.env",
});

const port = process.env.PORT || 5000;
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // URL of your Next.js frontend
    methods: ["GET", "POST"],
  },
});

app.get("/", (req, res) => {
  res.send("Socket.io Server is running");
});

io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);

  socket.on("disconnect", () => {
    console.log(`User disconnected: ${socket.id}`);
  });

  socket.on("message", (data) => {
    console.log(data);
    io.emit("message", data);
  });
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
