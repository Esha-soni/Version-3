const mongoose = require("mongoose");

const psychologistSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    fullName: {
        type: String,
        required: true
    },

    dob: {
        type: Date,
        required: true
    },

    gender: {
        type: String,
        enum: ["Male", "Female", "Prefer not to say"],
        required: true
    },

    phone: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    city: {
        type: String,
        required: true
    },

    professionalBio: {
        type: String,
        default: ""
    },

    qualification: {
        type: String,
        required: true
    },

    institution: {
        type: String,
        required: true
    },

    graduationYear: {
        type: Number,
        required: true
    },

    specialization: {
        type: String,
        required: true
    },

    licenseNumber: {
        type: String,
        required: true
    },

    issuingAuthority: {
        type: String,
        default: ""
    },

    licenseType: {