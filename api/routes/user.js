var express = require('express');
var bcrypt = require('bcrypt');
var mysql = require('mysql');
var router = express.Router();

// Creates information for database connection
var connection = mysql.createConnection({

    host: 'localhost',
    user: 'magnuschase03',
    password: '',
    database: 'test'

});

// Connects to database
connection.connect((err) => {

    if (err) console.log(err);
    else console.log("Connected to MYSQL");

});

// Creates new user
router.get('/add/:user/:password', function (req, res, next) {

    var username = req.params["user"];
    var password = req.params["password"];

    //Hashes password
    bcrypt.hash(password, 10, (err, hash) => {

        var addUserQuery = 'insert into logins(username, password) values("' + username + '", "' + hash + '")';
        connection.query(addUserQuery, (err, rows) => {

            if (err) console.log(err);
            else console.log(rows);

        });

    });


});

// Manages logging in
router.get('/login/:user/:password', function (req, res, next) {

    var username = req.params["user"];
    var password = req.params["password"];

    //Hashes password
    bcrypt.hash(password, 10, (err, hash) => {

        var data = { Username: username, Password: hash };
        res.json(data);

    });


});

module.exports = router;
