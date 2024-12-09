require('dotenv').config();
var cors = require("cors");

const express = require('express');
const app = express();
app.use(cors());

const mongoose = require('mongoose');



app.use(express.json());

const workOutRouter = require('./routers/workouts');

app.use((req, res, next) => {

    console.log("middlewar run.");
    next();
})


app.use("/api/workouts", workOutRouter);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, (() => {
            console.log("server Connected succesfully");
        }));

    }).catch((err) => {
        console.log(err);
    })



