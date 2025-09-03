var express = require('express');
var app = express();
const path = require('path');
const port = 80;

app.get('/', (req, res) => {
    res.status(301);
    res.redirect('/docs/index.html');
});
app.get('/assets/:param1', (req, res) => {
    res.sendFile(__dirname + '/docs/' + req.params.param1);
    console.log(req.params.param1);
    //console.log("SiteLoaded");
});
app.get('/favicon.ico', (req, res) => {
    res.sendFile(__dirname + '/docs/NewBrowse.gif');
});

app.listen(port, () => {
    console.log("listening");
});