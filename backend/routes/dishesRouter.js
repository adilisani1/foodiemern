const express = require("express");
const Dishes = require("../models/dishes");

const dishesRouter = express.Router();

const dummyData = require('../../client/src/dishes.json')
dishesRouter.get("/dishes", async (req, res) => {
    const dishes = await Dishes.find({})
    res.status(201).json(dishes)
})

dishesRouter.post("/dishes", async (req, res, next) => {
    try {
        const dishes = await Dishes.create(dummyData);
        const saveDish = await dishes.save();
        res.status(201).json(saveDish)
    } catch (error) {
        console.log(error)
    }
});

dishesRouter.delete("/dishes/:id", async (req, res, next) => {
    try {
        const deletedDish = await Dishes.findByIdAndRemove(req.params.id);
        if (!deletedDish) {
            return res.status(404).json('Dish not found');
        }
        res.send(deletedDish);
    } catch (error) {
        console.log(error);
        res.status(500).json('Internal Server Error');
    }
});

module.exports = dishesRouter;
