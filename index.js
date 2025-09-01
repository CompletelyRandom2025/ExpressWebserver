var express = require('express');
var app = express();
const path = require('path');
const port = 80;

app.get('/', (req, res) => {
    res.status(200);
    res.sendFile(__dirname + '/assets/index.html');
    console.log("SiteLoaded");
})
app.get('/assets/:param1', (req, res) => {
    res.sendFile(__dirname + '/assets/' + req.params.param1);
    
    console.log(req.params.param1);
})
app.get('/favicon.ico', (req, res) => {
    console.log(__dirname);
    res.sendFile(__dirname + '/assets/NewBrowse.gif');
    //res.send("hi");
})

app.listen(port, () => {
    //console.log("listening");
})