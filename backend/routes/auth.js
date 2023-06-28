const userRouter = require('express').Router();
const User = require('../models/user');

//Register
userRouter.get("/register", async (req, res) => {
    const users = await User.find({});
    res.send(users);
})

userRouter.post("/register", async (req, res) => {

    const { username, email, password } = req.body;
    try {
        // same username, email, and password already exists
        const existingUser = await User.findOne({ username, email, password });

        if (existingUser) {
            // User already exists
            return res.status(409).json({ message: "User already exists." });
        }

        // Create a new user
        const newUser = new User({
            username,
            email,
            password,
        });

        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(401).json(err);
    }

})
//Login 
userRouter.post('/login', async (req, res, next) => {

    const { email, password } = req.body;

    // if (!email || !password) {
    //     return res.status(404).json("Please filled the details.")
    // }

    try {

        const userEmail = await User.findOne({ email: email });
        const userPassword = await User.findOne({ password: password });

        if (userEmail && userPassword) {
            return res.status(201).json({ message: "Logged in successfully." })
        }
        else {
            return res.status(404).json({ message: "Wrong credentials." })
        }

    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = userRouter