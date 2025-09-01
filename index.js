var express = require('express');
var app = express();
const path = require('path');
const port = 80;

app.get('/', (req, res) => {
    res.status(200);
    res.sendFile(__dirname + '/assets/index.html');
    console.log("SiteLoaded");
})
app.get('/assets', (req, res) => {
    res.sendFile(__dirname + '/public/idkk');
    console.log(req);
})
app.get('/favicon.ico', (req, res) => {
    console.log(__dirname);
    res.sendFile(__dirname + '/assets/NewBrowse.gif');
    //res.send("hi");
})

app.listen(port, () => {
    //console.log("listening");
})