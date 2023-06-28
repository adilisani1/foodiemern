const express = require('express');
const mongoose = require('mongoose');


const cors = require('cors');
const bodyParser = require('body-parser');

const dishRouter = require('./routes/dishes');
const userRouter = require('./routes/auth');
const contactRouter = require('./routes/contact');

require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5000;


const uri = process.env.MONGODB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("DBConnection Successfull"))
    .catch((err) => console.log(err))

app.use(express.json());

app.use(cors());
app.use(bodyParser.json());
app.use("/", dishRouter);
app.use("/user", userRouter);
app.use("/api", contactRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});
