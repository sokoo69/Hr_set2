import mongoose from "mongoose";

export const ConnectDB = async () => {
    try {
        // Check if already connected
        if (mongoose.connection.readyState === 1) {
            console.log("MongoDB already connected...");
            return;
        }
        
        if (!process.env.MONGODB_URI) {
            throw new Error("MONGODB_URI is not defined in environment variables");
        }
        
        console.log("Attempting to connect to MongoDB...");
        const connection = await mongoose.connect(process.env.MONGODB_URI, {
            serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
        });
        console.log(`MongoDB connected successfully! Database: ${connection.connection.name}`);
        return connection;
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        // Don't exit in serverless environments - throw error instead
        throw error;
    }
}