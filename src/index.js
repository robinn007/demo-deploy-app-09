const express = require("express");
const cors = require("cors");
//const path  = require("path");
const app = express();

const PORT = process.env.PORT || 5000;

const apiData = require("./data.json");

app.use(cors()); // Use the cors middleware

app.get("/", (req, res) => {
   // res.sendFile(path.join(__dirname, 'pages/index.html'))
    res.send("Hi, I am live using 5000");
});

app.get("/service", (req, res) => {
    res.send(apiData); // Corrected the typo here
});

const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`${PORT} Yes, I am connected`); 
        });
    } catch (error) {
        console.log(error);
    }
};

start();

module.exports = app;