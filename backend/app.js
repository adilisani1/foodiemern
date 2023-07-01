const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

const cors = require('cors');
const dishRouter = require('./routes/dishes');

require('dotenv').config();

mongoose.connect("mongodb+srv://adil:aadil%400321@cluster0.1ijveb9.mongodb.net/foodapplication", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("DB Connection Successful"))
    .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());
app.use("/api", dishRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
