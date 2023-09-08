const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send("I will be shown on the Browser");
});

app.listen(5000);