// Importing dependecies
const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

// Setting up api
var app = express();
app.use(cors());
var database;

// Checking if request is from frontend
function requestFromApp(req) {

    return req.headers['host'] == 'http://localhost:3000';

}

// Routes
app.get('/user/add/:username/:password', (req, res) => {

    if (!requestFromApp(req)) {

        // Gets current date
        var date = new Date();
        var dateString = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();

        // Add User To Database

        // TODO: Create Custom ID
        var query = 'insert into users(id, username, password, dateCreated) values("0", "' + req.params['username'] + '", "' + req.params['password'] + '", "' + dateString + '")';

        database.query(query, (err, rows) => {

            if (err) {

                console.log(err);
                res.json({ Status: 'Could not create user' })

            } else {

                res.json(rows);

            }

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