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
        enum: [
            "Male",
            "Female",
            "Prefer not to say"
        ],
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
        type: String,
        default: ""
    },


    licenseExpiryDate: {
        type: Date
    },


    experience: {
        type: String,
        required: true
    },


    previousWorkplace: {
        type: String,
        default: ""
    },


    expertise: {
        type: String,
        default: ""
    },


    certificates: [
        {
            type: String
        }
    ],


    governmentId: {
        type: String,
        default: ""
    },


    licenseDocument: {
        type: String,
        default: ""
    },


    qualificationProof: {
        type: String,
        default: ""
    },


    verified: {
        type: Boolean,
        default: false
    }


}, {
    timestamps: true
});


module.exports = mongoose.model(
    "Psycologist",
    psychologistSchema
);