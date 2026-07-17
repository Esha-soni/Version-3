const Psychologist = require("../models/Psycologits");

exports.registerPsychologist = async (req, res) => {

    try {

        const psychologist = new Psychologist(req.body);

        await psychologist.save();

        res.status(201).json({
            success: true,
            message: "Psychologist Registered Successfully",
            psychologist
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};