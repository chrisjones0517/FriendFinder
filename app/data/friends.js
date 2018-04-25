
let userArray = [];
let firebase = require('firebase');

let config = {
    apiKey: "AIzaSyCrF-xA8-yUBa5BfV9Y35QqLbOJ2PjHDeU",
    authDomain: "friendfinder-ba675.firebaseapp.com",
    databaseURL: "https://friendfinder-ba675.firebaseio.com",
    projectId: "friendfinder-ba675",
    storageBucket: "",
    messagingSenderId: "981670700023"
};
let app = firebase.initializeApp(config);
database = firebase.database();
let ref = database.ref('users');
ref.on('value', retrieveData, errData);

function retrieveData(data) {

    let users = data.val();
    let keys = Object.keys(users);
    // userArray = [];
    for (let i = 0; i < keys.length; i++) {
        let k = keys[i];
        let username = users[k].username;
        let userPic = users[k].userPic;
        let score = users[k].score;
        userArray.push({
            name: username,
            userPic: userPic,
            score: score
        });
    }
   // console.log(userArray, 'I ran!!!');
}

function errData(err) {
    console.log(err);
}

let addNewUser = function (username, picture, score) {

    let postData = {
        username: username,
        userPic: picture,
        score: score
    };

    let newUserKey = firebase.database().ref().child('users').push().key;

    let updates = {};
    updates['/users/' + newUserKey] = postData;

    return firebase.database().ref().update(updates);
}

module.exports = {
    addNewUser: addNewUser,
    userArray: userArray
};


