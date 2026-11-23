import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";

const connectDB = async () => {
    try {
        const baseUri = process.env.MONGODB_URI.trim();
        // If URI already includes query parameters or a database name, connect with dbName option
        const connectionInstance = await mongoose.connect(baseUri, {
            dbName: DB_NAME
        });
        console.log(`\n MongoDB connected! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("MongoDB connection FAILED: ", error);
        process.exit(1);
    }
};

export default connectDB;
