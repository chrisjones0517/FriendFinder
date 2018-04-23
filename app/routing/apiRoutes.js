const path = require('path');
const friends = require('./../data/friends.js');
const friendList = friends.friendList;

module.exports = function(app) {
    app.get('/api/friends', (req, res) => {
        console.log(friendList);
        res.json(friendList);
    });

    app.post('/api/friends', (req, res) => {
        friends.push(req.body);
    });
};