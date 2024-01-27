import mongoose from "mongoose";
import { DB_NAME, MONGO_DB_URL } from "../enums.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${MONGO_DB_URL}/${DB_NAME}`);
        console.log(`Connection Successful with MongoDB, HOST : ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log(`Connection with MongoDB failed : ${error}`);
    }
}

export default connectDB;