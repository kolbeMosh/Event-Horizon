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
router.get('/send/:serverID/:date/:message', function (req, res, next) {

    var serverID = req.params["serverID"];
    var date = req.params["date"];
    var message = req.params["message"];

    var messageJSON = { Date: date, Message: message };

    var getMessageQuery = 'select * from server where id=' + serverID;
    connection.query(getMessageQuery, (err, rows) => {

        res.json(rows);

    });

});

module.exports = router;