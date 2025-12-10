import dotenv from "dotenv";
import express from "express";
import fs from "fs";
import path from 'path';
import { fileURLToPath } from 'url';
import cors from "cors";
import { Server } from "socket.io";
import { createServer } from "http";

const PORT = process.env.PORT || 5555;
dotenv.config();

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"]
    }
});
app.use(express.json());
app.use(cors());


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const usersPath = path.join(__dirname, "/db/users/users.json");

// sockets
io.on('connection', (socket) => {
    console.log('a user connected');

    // socket event
    socket.on("send_message", (payload) => {
        io.emit("receive_message", payload);
    })
    socket.on("disconnect", () => {
        console.log("user disconnected");
    });
});

// apis
app.post("/api/register", (req, res) => {
    const { username } = req.body;

    if (!username) return res.status(400).json({ message: "Username required" })

    const users = fs.readFileSync(usersPath);
    const usersJson = JSON.parse(users);

    const findUser = usersJson?.find((user) => user.username === username);
    if(findUser) {
        return res.json({ message: "Login success" });
    }
    const newUser = {
        id: usersJson?.users?.length + 1,
        username
    };

    if (usersJson?.users) {
        usersJson?.users?.push(newUser);
    }

    // write back
    fs.writeFileSync(usersPath, JSON.stringify(usersJson, null, 2));

    return res.json({ message: "Registered successfully" });
})

httpServer.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT} 🚀🚀`);
})