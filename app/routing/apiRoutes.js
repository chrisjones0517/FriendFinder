
const path = require('path');
const friends = require('./../data/friends.js');
const fs = require('fs');
let addNewUser = friends.addNewUser;
let userArrayReady = friends.userArrayReady;

module.exports = function (app) {
    app.get('/api/friends', (req, res) => {
        
        let userArray = userArrayReady();     
        res.json(userArray);
    });

    app.post('/api/friends', (req, res) => {
        addNewUser(req.body.name, req.body.userPic, req.body.score);
        res.send("Post request was successful.");
    });
};