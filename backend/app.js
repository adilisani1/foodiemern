const express = require('express');
const mongoose = require('mongoose');


// const userRouter = require('./routes/auth');
// const contactRouter = require('./routes/contact');
const app = express();
const PORT = 5000;
const cors = require('cors');

const dishRouter = require('./routes/dishes');

require('dotenv').config();
// const uri = process.env.MONGODB_URI;

mongoose.connect("mongodb+srv://adil:aadil%400321@cluster0.1ijveb9.mongodb.net/foodapplication")
    .then(() => console.log("DBConnection Successfull"))
    .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());
app.use("/api", dishRouter);
// app.use("/user", userRouter);
// app.use("/api", contactRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`)
});
