import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";
import serverRoutes from "./routes/server.routes";
import cors from "cors";

const app: express.Application = express();

app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true, // Enable cookies in requests
    })
);
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/servers", serverRoutes);

export default app;
