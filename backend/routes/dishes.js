const express = require('express');
const Dishes = require('../models/Dishes');
const bodyParser = require('body-parser');

// const dishesJSON = require('../../src/dishes.json');

// Single routing
const router = express.Router();

const app = express()
app.use(bodyParser.json())

router.get("/dishes", async (req, res) => {
    const dishes = await Dishes.find({})
    res.send(dishes)
})

router.post('/dishes', async (req, res, next) => {
    try {
        const dishes = await Dishes.create(req.body);
        const saveDish = await dishes.save();
        res.send(saveDish)
    } catch (error) {
        console.log(error)
    }
});

router.delete('/dishes/:id', async (req, res, next) => {
    try {
        const deletedDish = await Dishes.findByIdAndRemove(req.params.id);
        if (!deletedDish) {
            return res.status(404).send('Dish not found');
        }
        res.send(deletedDish);
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
