const express = require('express');
const Dishes = require('../models/Dishes');

const dishRouter = express.Router();

dishRouter.get("/dishes", async (req, res, next) => {
    try {
        const dishes = await Dishes.find();
        res.status(200).json(dishes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

dishRouter.post("/dishes", async (req, res, next) => {
    try {
        const dish = new Dishes(req.body);
        const savedDish = await dish.save();
        res.status(201).json(savedDish);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = dishRouter;
