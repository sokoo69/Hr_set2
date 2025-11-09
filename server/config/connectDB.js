import mongoose from "mongoose";

export const ConnectDB = async () => {
    try {
        // Check if already connected
        if (mongoose.connection.readyState === 1) {
            console.log("MongoDB already connected...");
            return;
        }
        const connection = await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB connected...");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        // Don't exit in serverless environments - throw error instead
        throw error;
    }
}