const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dishRouter = require('./routes/dishes');

const port = 5000;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", dishRouter)

mongoose.connect("mongodb+srv://adil:aadil%400321@cluster0.1ijveb9.mongodb.net/foodapplication")
    .then(() => console.log("DBConnection Successfull"))
    .catch((err) => console.log(err))

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`)
});