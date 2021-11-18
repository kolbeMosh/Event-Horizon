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

        // Grabs last id number
        var userIdQuery = "select id from users";
        connection.query(userIdQuery, (err, rows) => {

            var nextID = rows[rows.length - 1]["id"] + 1;

            var addUserQuery = 'insert into users(id, username, password) values(' + nextID + ', "' + username + '", "' + hash + '")';
            connection.query(addUserQuery, (err2, rows2) => {

                if (err2) {

                    console.log(err2);
                    res.json({ Status: "Could not create user " + username });

                }

                else res.json({ Status: "Ok" });

            });

        });


    });


});

// Manages logging in
router.get('/login/:user/:password', function (req, res, next) {

    var username = req.params["user"];
    var password = req.params["password"];

    // Looks for user in database
    var addUserQuery = 'select * from users where username="' + username + '"';
    connection.query(addUserQuery, (err, rows) => {

        if (err) {

            console.log(err);
            res.json({ Status: "Could not find user " + username });

        } else {

            // Compares password to one in database
            bcrypt.compare(password, rows[0]["password"], (err, res2) => {

                if (res2) res.json({ Status: "Ok" });
                else res.json({ Status: "Wrong password" });

            });

        }

    });

});

module.exports = router;
