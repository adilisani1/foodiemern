const mongoose = require('mongoose');

const Dishes = new mongoose.Schema({
    title: {
        type: String,
    },
    price: {
        type: Number,
    },
    image: {
        type: String,
    },
    qty: {
        type: Number,
    },
    category: {
        type: String,
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Dish", Dishes);
