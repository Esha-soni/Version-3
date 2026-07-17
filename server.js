const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./Backend/config/db");
const authRoutes = require("./Backend/routes/AuthRoutes");

const app = express();
connectDB();


app.use(cors());
app.use(express.json());
app.use("/api", authRoutes);



app.get("/", (req, res) => {
    res.send("Mental Health Appointment System API Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});