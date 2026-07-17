const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


// Signup
exports.signup = async (req, res) => {
    console.log("Signup API Hit");
    console.log(req.body);
    try {
        const { fullName, email, password, role } = req.body;

        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(400).json({
                message: "User already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            fullName,
            email,
            password: hashedPassword,
            role
        });

        await user.save();

        res.status(201).json({
            success: true,
            message: "Account created successfully",
            user
        });

    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};

// Login
exports.login = async (req, res) => {
    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message: "Invalid Email"
            });
        }

        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            return res.status(400).json({
                message: "Invalid Password"
            });
        }

        const token = jwt.sign(
            {
                id: user._id,
                role: user.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d"
            }
        );

        res.json({
            message: "Login Successful",
            token,
            user
        });

    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};