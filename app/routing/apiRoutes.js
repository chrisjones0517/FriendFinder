const path = require('path');
const friends = require('./../data/friends.js');

module.exports = function(app) {
    app.get('/api/friends', (req, res) => {
        res.json(friends);
    });

    app.post('/api/friends', (req, res) => {
        friends.push(req.body);
    });
};