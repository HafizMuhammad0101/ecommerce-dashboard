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
    try {
        const user = new User(req.body);//assigning request body to User Model
        let saveData = await user.save();//saving record in database using .save() method
        saveData = saveData.toObject();//converting json into object in order to delete password as it is already stored in DB and now no need of it to send in res.send();
        delete saveData.password;//deleted password field from response, "not" from DB.
        res.send(saveData);
    } catch (err) {
        console.log(err);
    }
})

app.post("/login", async (req, res) => {
    if (req.body.email && req.body.password) {//checking if user is sending both email and password
        const user = await User.findOne(req.body).select("-password");//find user and remove his password before sending it to response object. CAUTION: Do remember that nothing is removed from DB,its all happening in res.obj 
        if (user) {
            res.send(user);
        } else {
            res.send({ result: "User not found" });
        }
    } else {
        res.send({ result: "User not found" });
    }
})

app.listen(PORT, () => {
    console.log(`Server is Listening on port ${PORT}`);
    connectDB();
})