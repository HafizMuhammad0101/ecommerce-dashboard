import express from "express";
import cors from "cors";
import connectDB from "./db/config.js";
import { PORT } from "./enums.js";
import { User } from "./models/user.model.js";

const app = express();

//middlewares
app.use(express.json());
app.use(cors());


app.post("/register", async (req, res) => {
    const user = new User(req.body);
    const saveData = await user.save();
    res.send(saveData);
})

app.listen(PORT, () => {
    console.log(`Server is Listening on port ${PORT}`);
    connectDB();
})