const mongoose = require('mongoose');

const dishesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
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
const Dishes = mongoose.model("Dish", dishesSchema)
module.exports = Dishes;