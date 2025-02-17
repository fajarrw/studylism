import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import { userRouter } from "./routes/users.js"
import { journalRouter } from "./routes/journal.js"
import { learningStyleRouter } from "./routes/learningStyle.js"

const app = express();

app.use(cors({
    origin: "*"
}));

dotenv.config()  

app.use(express.json());

app.use("/auth", userRouter);
app.use("/journal", journalRouter);
app.use("/learning-style", learningStyleRouter);

mongoose.connect(
    process.env.RESTSTUDYLISM_DB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
)

app.listen(3001, () => console.log("SERVER STARTED!"));

export default app;