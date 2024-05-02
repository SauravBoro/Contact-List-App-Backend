const mongoose = require("mongoose");

const connectDB = (uri) => {
    console.log("connecting to database");
    return mongoose.connect(uri);
};

module.exports = connectDB;