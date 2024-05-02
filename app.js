require("dotenv").config();
const express = require("express")
const app = express();
const connectDB = require('./db/connect')

const PORT = process.env.PORT || 3000;

const contacts_routes = require("./routes/contacts");
app.get('/', (req, res) => {
    res.send("Hi, I am live");
});

//middleware

app.use("/api/contacts", contacts_routes);

const start = async () => {
    try{
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, ()=> {
            console.log(`connected to port ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
}

start();