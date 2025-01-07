import express from "express";
import cors from "cors";
import connectDB from "./config/connectdb.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("True");
});

connectDB();

app.listen(5000, () => console.log("Server is running on port 5000"));