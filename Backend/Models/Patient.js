const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    fullName: {
        type: String,
        required: true
    },

    age: {
        type: Number,
        required: true
    },

    dob: {
        type: Date,
        required: true
    },

    gender: {
        type: String,
        enum: ["Male", "Female", "Non-binary", "Prefer not to say"],
        required: true
    },

    phone: {
        type: String,
        required: true
    },

    city: {
        type: String,
        required: true
    },

    concern: {
        type: String,
        required: true
    },

    description: {
        type: String,
        default: ""
    },

    symptoms: [{
        type: String
    }],

    preferredLanguage: {
        type: String,
        default: "English"
    },

    preferredPsychologistGender: {
        type: String,
        default: "No Preference"
    },

    preferredTime: {
        type: String,
        default: "Morning"
    },

    emergencyContactName: {
        type: String,
        required: true
    },

    emergencyRelationship: {
        type: String,
        required: true
    },

    emergencyPhone: {
        type: String,
        required: true
    },

    previousTherapy: {
        type: String,
        default: "No"
    },

    currentMedications: {
        type: String,
        default: ""
    },

    existingDiagnosis: {
        type: String,
        default: ""
    },

    allergies: {
        type: String,
        default: ""
    },

    additionalNotes: {
        type: String,
        default: ""
    },

    createdAt: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model("Patient", patientSchema);