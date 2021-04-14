const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
    res.send("<h1>Hello World! From Js Server</h1>");
});

app.listen(port, () => {
    console.log(`The Js Server Is Running On Port ${port}`);
});