const express = require('express');
const Dishes = require('../models/Dishes');

const dishRouter = express.Router();

dishRouter.get("/dishes", async (req, res) => {
    const dishes = await Dishes.find()
    res.status(201).json(dishes)
})

dishRouter.post('/dishes', async (req, res, next) => {
    try {
        const dishes = await Dishes(req.body);
        const saveDish = await dishes.save();
        res.status(201).json(saveDish)

    } catch (error) {
        res.status(500).json(error)
    }
});


module.exports = dishRouter;
