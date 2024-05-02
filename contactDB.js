require('dotenv').config();
const connectDB = require('./db/connect');
const Contact = require("./models/contacts");

const ContactJson = require("./contacts.json")
const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        await Contact.create(ContactJson);
    } catch (error) {
        console.log(error);
    }
}

start();