var express = require('express');
const LoremIpsum = require("lorem-ipsum").LoremIpsum;
var app = express();
const path = require('path');
const port = 80;
const lorem = new LoremIpsum();

app.get('/', (req, res) => {
    res.status(301);
    res.redirect('/assets/index.html');
});
app.get('/assets/:param1', (req, res) => {
    res.sendFile(__dirname + '/docs/' + req.params.param1);
    console.log(req.params.param1);
    //console.log("SiteLoaded");
});
app.get('/favicon.ico', (req, res) => {
    res.sendFile(__dirname + '/docs/NewBrowse.gif');
});
app.get('/lorem', async (req, res) => {
    res.send(await lorem.generateWords(300));
});

app.listen(port, () => {
    console.log("listening");
});

async function test()
{
    response2 = await fetch(new URL(''));
    response2 = await response2.text();
    response2 =  JSON.parse(response2).text;
    response2 =  response2.toUpperCase();
    return response2;
}