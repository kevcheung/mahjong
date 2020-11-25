const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
    res.send("express")
});

app.get('/test', (req, res) => {
    res.status(404).send("ERROR");
});

app.get('/ping', (req, res) => {
    res.send("pong");
});

app.listen(port, () => {
    console.log(`APP LISTENING ON PORT ${port}`);
});
