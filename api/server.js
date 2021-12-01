// Importing dependecies
const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const crypto = require('crypto');

// Setting up api
var app = express();
app.use(cors());
var database;

// Checking if request is from frontend
function requestFromApp(req) {

    return req.headers['host'] == 'http://localhost:3000';

}

// Create a date string for MYSQL
function getDateString() {

    var date = new Date();
    var dateString = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();

    return dateString;

}

// Routes
app.get('/user/add/:username/:password', (req, res) => {

    // TODO: Remove negation for actual product!!!
    if (requestFromApp(req)) {

        // Adds the user to database

        // Get ids of the current users
        var query = 'select id from users where username="' + req.params['username'] + '"';
        database.query(query, (err, rows) => {

            // Creates new user ID
            var newID = 0;
            if (rows.length != 0) {

                var lastId = parseInt(rows[rows.length - 1]['id'], 16);
                newID = (lastId + 1).toString(16);

            }

            // Hash password
            var passwordHash = crypto.createHash('md5').update(req.params['password']).digest('hex');

            // Adding the user to the database
            query = 'insert into users(id, username, password, dateCreated) values("' + newID + '", "' + req.params['username'] + '", "' + passwordHash + '", "' + getDateString() + '")';

            database.query(query, (err, rows) => {

                if (err) {

                    console.log(err);
                    res.json({ Status: 'Could not create user' })

                } else {

                    res.json(rows);

                }

            });

        });


    } else {

        res.sendStatus(403);

    }

});

// Start Server
app.listen(3001, (err) => {

    // Connect to MYSQL database
    console.log('Connecting to MYSQL...');
    database = mysql.createConnection({

        host: 'localhost',
        user: 'magnuschase03',
        password: '',
        database: 'EventHorizon'

    });
    console.log('Connected to MYSQL: ' + database + '\n');

    console.log('API Running On Port 3001...');

});