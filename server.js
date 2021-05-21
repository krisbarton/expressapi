const express = require('express');
const serverless = require('serverless-http');
const app = express();
const reactData = require('./data/react.json');

app.get('/', (req, res) => {
    return res.send("hello world");
});

app.get('/react', (req, res) => {
    return res.send(reactData);
});

app.listen(3000, () => console.log('Local app listening on port 3000!'));