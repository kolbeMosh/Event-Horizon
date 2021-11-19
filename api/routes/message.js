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

// Adds message to database
router.get('/get/:serverName/:serverID', (req, res) => {

    var serverName = req.params['serverName'];
    var serverID = req.params['serverID'];

    // Get message table for requested server
    var messageTableQuery = 'select * from ' + serverName + '' + serverID + 'Messages';
    connection.query(messageTableQuery, (err, rows) => {

        res.json(rows);

    });

});

module.exports = router;