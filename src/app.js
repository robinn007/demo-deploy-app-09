const express = require("express");
const path  = require("path");
const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'pages/index.html'))
    //res.send("Hi, I am live using 5000");
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
