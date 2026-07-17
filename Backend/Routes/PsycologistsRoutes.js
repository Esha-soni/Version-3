const express = require("express");
const router = express.Router();

const {
    registerPsychologist
} = require("../controllers/PsycologistController");

router.post("/register-psychologist", registerPsychologist);

module.exports = router;