const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dishRouter = require('./routes/dishes');
const userRouter = require('./routes/userRoute');

const port = process.env.PORT || 5000;
const app = express();
require('dotenv').config();

const allowedOrigins = [
  "http://localhost:3000",
  "https://foodiemern-front-end.vercel.app",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) return callback(null, true);
      return callback(new Error(`Origin ${origin} not allowed by CORS`));
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.json());
app.use("/api", dishRouter)
app.use("/auth", userRouter)

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("DBConnection Successfull"))
    .catch((err) => console.log(err))

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`)
});