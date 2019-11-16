const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/acme", { useNewUrlParser: true, useUnifiedTopology: true }, (error) => {
    if (!error) {
        //console.error("Connected Success");

    } else {
        console.error("Error connecting to database");

    }
});


const Course = require("./course.model");
const User = require("./user.model");