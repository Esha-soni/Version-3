const express = require("express");
const router = express.Router();

const { registerPatient } = require("../controllers/PatientController");

router.post("/register-patient", registerPatient);

module.exports = router;