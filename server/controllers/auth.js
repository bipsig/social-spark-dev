import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

/* REGISTER USER */
export const register = async (req, res) => {
    try {
        const {
            firstName, 
            lastName,
            email,
            password,
            picturePath,
            friends,
            location,
            occupation
        } = req.body;
        // De-structuring the request body obtained from the front-end to fill the data

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const newUser = new User ({
            firstName, 
            lastName,
            email,
            password: passwordHash,
            picturePath,
            friends,
            location,
            occupation,
            viewedProfile: Math.floor(Math.random() * 1000),            //Random Value as we are not appending this functionality right now
            impressions: Math.floor(Math.random() * 1000)
        });

        const savedUser = await newUser.save();
        // Saving the new created User
        res.status(201).json(savedUser);
        // Giving response back to the frontend if no error has occured zand hence Status Code 201 that represents something is created
    }
    catch (err) {
        res.status(500).json({error: err.message});
    }
}


/* LOGGING IN */
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email: email });
        // Using Mongoose to find the specified User

        if (!user) {
            return res.status(400).json({ msg: "User does not exist." });
        }

        const isMatch = await bcrypt.compare (password, user.password);

        if (!isMatch) {
            return res.status(400).json({ msg: "Invalid credentials"});
        }

        const token = jwt.sign ({ id: user._id}, process.env.JWT_SECRET);
        delete user.password;

        res.status(200).json ({ token, user });
    }
    catch (err) {
        res.status(500).json({ error: err.message});
    }
}