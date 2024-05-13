
import mongoose from 'mongoose';
export const dbConnect = async () => {
    const MONGO_URI = 'mongodb+srv://Dhruv:q4WFN8EMJb0pGtTA@cluster0.kcuucmb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/Naya';

    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // bufferCommands: false,
            socketTimeoutMS: 30000, // 30 seconds
    connectTimeoutMS: 30000
        });
        console.log("Connected successfully to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

