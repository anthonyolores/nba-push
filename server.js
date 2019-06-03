const http = require("http");
const axios = require('axios');
const bodyParser = require('body-parser');
const webPush = require('web-push');
const express = require('express');
const path = require('path');
const app     = express();
const fs = require("fs");

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client/build')));

const publicKey = 'BJq1o9fZXpsyZkEDS54m0-UTYEp0Ab4leKHfo0LmODAAitL_YBIaxLykQypltOmEc6OxJIvQwv3VNdy98yjyr6M';
const privateKey = 'VuyyzuEQx25XXYiol6pkFuVObcKgT1nMbE0Kvoo_W00';

webPush.setVapidDetails('mailto:masterbahbidi@gmail.com', publicKey, privateKey);
//production mode
if(process.env.NODE_ENV === 'production' || true) {  
    app.get('*', (req, res) => {    
        res.sendFile(path.join(__dirname +'/client/public/index.html'));  
    });
}
else{
    //build mode
    //app.get('*', (req, res) => {  res.sendFile(path.join(__dirname+'/client/public/index.html'));});
}




//allow cross origin
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//get games from NBA API
app.post('/getgames', function(req, res){
    axios.get('http://data.nba.net/10s/prod/v1/' + req.query.gameDate + '/scoreboard.json')
    .then(response => {
        res.send(response.data.games);
    })
    .catch(error => {
        res.send(null);
    })
});

//get boxscore
app.post('/getboxscore', function(req, res){
    axios.get('http://data.nba.net/json/cms/noseason/game/' + req.query.gameDate + '/' + req.query.gameId  + '/boxscore.json')
    .then(response => {
        res.send(response.data.sports_content);
    })
    .catch(error => {
        res.send(null);
    })
});

//get playbyplay
app.post('/getplaybyplay', function(req, res){
    axios.get('http://data.nba.net/json/cms/noseason/game/' + req.query.gameDate + '/' + req.query.gameId  + '/pbp_' + req.query.gamePeriod +'.json')
    .then(response => {
        res.send(response.data.sports_content);
    })
    .catch(error => {
        res.send(null);
    })
});

//subscribe route
app.post('/push',(request, response) => {
    //get subscribed object
    const subscription = request.body.subscription;

    console.log('hello ',subscription);

    //send 201 - resource created
    response.status(201).json({});

    //data to send
    const dataSend = JSON.stringify({title: request.body.title, message: request.body.message});

    //send data to notify
    webPush.sendNotification(subscription, dataSend).catch(err => {
        console.log("This is an error!!!");
        console.log(err)
    }
    );

});


  //start server
app.listen('8085', function () {
    console.log("Express server listening on port 8085");
});
exports = module.exports = app;