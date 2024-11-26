import mongoose from "mongoose";

const serverSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true },
        description: { type: String },
        os: { type: Number, required: true },
        ram: { type: String, required: true },
        cpu: { type: String, required: true },
        active: { type: Boolean, required: true },
        date: { type: Date, default: Date.now() },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    { timestamps: true }
);

export default mongoose.model("Server", serverSchema);
