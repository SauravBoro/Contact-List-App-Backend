const mongoose = require('mongoose');

const ContactScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phone_number: {
        type: Number,
        required: true,
    },
    tags: {
        type: String,
        required: false,
    },
    age: {
        type: Number,
        required: false,
    },
    company: {
        type: String,
        required: false,
    }
})

module.exports = mongoose.model('Contact', ContactScheme);