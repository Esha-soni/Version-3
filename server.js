const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const connectDB = require("./Backend/config/db");

const authRoutes = require("./Backend/routes/AuthRoutes");
const patientRoutes = require("./Backend/routes/PatientRoutes");

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", authRoutes);
app.use("/api", patientRoutes);

// Test Route
app.get("/", (req, res) => {
    res.send("Mental Health Appointment System API Running...");
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});