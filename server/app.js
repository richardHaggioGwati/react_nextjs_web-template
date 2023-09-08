const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.json("All the way from the back.....");
});

app.listen(5000);