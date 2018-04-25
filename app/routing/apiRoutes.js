
const path = require('path');
const friends = require('./../data/friends.js');
const fs = require('fs');
let addNewUser = friends.addNewUser;
let userArray = friends.userArray;

module.exports = function (app) {
    app.get('/api/friends', (req, res) => {
        
        // for (let i = 0; i < userArray.length; i++) {
        //     for (let j = 0; j < i; j++) {
        //         if (j !== i && userArray[i].name === userArray[j].name) {
        //             userArray.splice(j, 1);
        //         }
        //     }
        // }
        
        res.json(userArray);
    });

    app.post('/api/friends', (req, res) => {
        addNewUser(req.body.name, req.body.userPic, req.body.score);
        res.send("Post request was successful.");
    });
};