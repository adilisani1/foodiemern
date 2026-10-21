const dns = require("dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);

require("dotenv").config();
const mongoose = require("mongoose");
const Dish = require("../models/dish");

const TITLE_MAP = {
  "Burger One": "Classic Cheeseburger",
  "Burger Two": "Double Smash Burger",
  "Burger Three": "BBQ Bacon Burger",
  "Pizza One": "Margherita Pizza",
  "Pizza Two": "Pepperoni Feast",
  "Pizza Three": "Veggie Supreme",
  "Noodle 1": "Spicy Garlic Noodles",
  "Noodles 2": "Creamy Butter Noodles",
  "Desert One": "Chocolate Fudge Cake",
  "Drink One": "Iced Cold Brew",
  "French Fries": "Crispy French Fries",
};

async function run() {
  await mongoose.connect(process.env.MONGO_URI);
  const dishes = await Dish.find({});

  for (const dish of dishes) {
    const nextTitle = TITLE_MAP[dish.title];
    if (!nextTitle || nextTitle === dish.title) continue;
    const prev = dish.title;
    dish.title = nextTitle;
    await dish.save();
    console.log(`${prev} -> ${nextTitle}`);
  }

  await mongoose.disconnect();
  console.log("Done.");
}

run().catch(async (err) => {
  console.error(err);
  try {
    await mongoose.disconnect();
  } catch (_) {}
  process.exit(1);
});
