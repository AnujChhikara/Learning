import express from "express";
import http from "http";
import path from "path";
import { Server } from "socket.io";


const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.resolve("./public")));

app.get("/", (req, res) => {
    res.sendFile("/public/index.html");
});
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
  });



server.listen(3000, () => {
    console.log("Server is running on port 3000");
})