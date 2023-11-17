const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/cricketteam').then(() => {
    console.log("Connected to mongoose!");
})
.catch((err) => {
    console.log("Error connecting to mongoose!");
    console.log(err);
})

