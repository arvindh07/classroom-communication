import dotenv from "dotenv";
import express from "express";
import fs from "fs";
import path from 'path';
import { fileURLToPath } from 'url';
import cors from "cors";

const PORT = process.env.PORT || 5555;
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const usersPath = path.join(__dirname, "/db/users/users.json");

app.post("/api/register", (req, res) => {
    const { username } = req.body;

    if(!username) return res.status(400).json({ message: "Username required" })
    
    const users = fs.readFileSync(usersPath);
    const usersJson = JSON.parse(users);
    const newUser = {
        id: usersJson?.users?.length + 1,
        username
    };

    if(usersJson?.users) {
        usersJson?.users?.push(newUser);
    }

    // write back
    fs.writeFileSync(usersPath, JSON.stringify(usersJson, null, 2));

    return res.json({ message: "Registered successfully" });
})

app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT} 🚀🚀`);
})