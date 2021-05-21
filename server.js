const express = require('express');
const app = express();
const reactData = require('./data/react.json');

app.get('/', (req, res) => {
    return res.send("hello world");
});

app.get('/react', (req, res) => {
    return res.send(reactData);
});

app.listen(process.eventNames.PORT || 8080);