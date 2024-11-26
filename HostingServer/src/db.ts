import mongoose from "mongoose";
export async function connectDB() {
    try {
        await mongoose.connect(
            "mongodb://localhost:27017"
        );
        console.log("DB connection established.");
    } catch (error) {
        console.log(error);
    }
}
