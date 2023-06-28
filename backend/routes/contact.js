const contactRouter = require('express').Router();
const Contact = require('../models/contact');

//Register
contactRouter.get("/contact-us", async (req, res) => {
    const users = await Contact.find({});
    res.send(users);
})

contactRouter.post("/contact-us", async (req, res) => {

    const { username, email, message } = req.body;

    const newUser = new Contact({
        username: username,
        email: email,
        message: message
    });

    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
        // res.send(savedUser)
    } catch (err) {
        res.status(401).json(err);
    }

})

module.exports = contactRouter