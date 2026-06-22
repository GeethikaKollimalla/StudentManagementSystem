const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const studentRoutes = require("./routes/studentRoutes");

dotenv.config();

const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Student Management System Running");
});

const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use("/api", studentRoutes);
app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});