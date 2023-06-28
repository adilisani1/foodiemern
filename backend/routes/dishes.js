const express = require('express');
const Dishes = require('../models/dishes')

const dishRouter = express.Router();
// const dishesJson = require('../../client/src/dishes.json');

dishRouter.get("/dishes", async (req, res) => {
    try {
        const dishes = await Dishes.find({});
        res.status(201).json(dishes);
    } catch (error) {
        console.log(error)
    }
});

dishRouter.post('/dishes', async (req, res) => {
    try {
        const dishes = await Dishes.create(req.body);
        const saveDish = await dishes.save();
        res.status(201).json(saveDish);
    } catch (error) {

        console.log(error)
    }
});

dishRouter.delete('/dishes/:id', async (req, res) => {
    try {
        const deletedDish = await Dishes.findByIdAndRemove(req.params.id);
        if (!deletedDish) {
            return res.status(404).json({ error: 'Dish not found' });
        }
        res.status(201).json(deletedDish);
    } catch (error) {

        console.log(error)
    }
});

module.exports = dishRouter
