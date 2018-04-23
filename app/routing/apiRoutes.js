const path = require('path');
const friends = require('./../data/friends.js');
const fs = require('fs');

module.exports = function (app) {
    app.get('/api/friends', (req, res) => {
        res.json(friends);
    });

    app.post('/api/friends', (req, res) => {
        fs.appendFile(__dirname + '/../data/friends.js', ',\n' + JSON.stringify(req.body, null, 2), 'utf-8', (err) => {
            if (err) throw err;
        });
        // friends.push(req.body);
    });
};