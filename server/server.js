import dotenv from "dotenv";
import express from "express";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5555;

app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT} 🚀🚀`);
})