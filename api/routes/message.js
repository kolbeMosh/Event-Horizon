var express = require('express');
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

// Gets message from database
router.get('/get/:serverName/:serverID', (req, res) => {

    var serverName = req.params['serverName'];
    var serverID = req.params['serverID'];

    // Get message table for requested server
    var messageTableQuery = 'select * from ' + serverName + '' + serverID + 'Messages';
    connection.query(messageTableQuery, (err, rows) => {

        res.json(rows);

    });

});

// Adds message to database
router.get('/send/:serverName/:serverID/:message', (req, res) => {

    var serverName = req.params['serverName'];
    var serverID = req.params['serverID'];
    var message = req.params['message'];

    var messageTable = serverName + '' + serverID + 'Messages';

    // Get last message id
    var messageIdQuery = 'select * from ' + messageTable;
    connection.query(messageIdQuery, (err, rows) => {

        // Gets next id
        var lastID = parseInt(rows[rows.length - 1]['id'], 16);
        var nextID = (lastID + 1).toString(16);

        // Gets current date
        var date = new Date();
        var dateString = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();

        // Add message to database
        var addMessageQuery = 'insert into ' + messageTable + '(id, dateSent, message) values("' + nextID + '", "' + dateString + '", "' + message + '")';
        connection.query(addMessageQuery, (err, rows) => {

            if (err) {

                console.log(err);
                res.json({ Staus: "Could not send message" });

            } else {

                res.json({ Status: "Ok" });

            }

        });

    });

});

module.exports = router;