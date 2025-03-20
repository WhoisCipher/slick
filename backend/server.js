import express from "express";
import fs from "fs";
import cors from "cors";
import { connection } from "./db.js";
import { upload } from "./upload.js";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/upload", upload.single("file"), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: "No File Uploaded" });
    }
    res.json({ message: "File Uploaded Successfully", file: req.file });
});

//connect to db
connection();

app.get("/", (req, res) => {
    res.send("API Up Suckers!");
});

app.get("/users", async (req, res) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request().query("SELECT * FROM Users"); // Change 'Users' to your table name

        res.json(result.recordset); // Send the users as JSON
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.post(

const PORT = process.env.BACKEND_PORT || 3000;
app.listen(PORT, () => console.log(`Server Running on ${PORT}`));
