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
    else console.log('Connected to MYSQL');

});

// Creates a new room
router.get('/create/:name', (req, res) => {

    var roomName = req.params['name'];

    // Get last id number
    var roomIdQuery = 'select id from rooms';
    connection.query(roomIdQuery, (err, rows) => {

        // Creates next usable id
        var lastID = parseInt(rows[rows.length - 1]['id'], 16);
        var nextID = (lastID + 1).toString(16);

        // Gets current date
        var date = new Date();
        var dateString = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();

        // Adds new room to database
        var addRoomQuery = 'insert into rooms(id, name, messageTable, dateCreated) values("' + nextID + '", "' + roomName + '", "' + roomName + nextID + 'Messages", "' + dateString + '")';
        connection.query(addRoomQuery, (err2, rows2) => {

            if (err2) {

                console.log(err2);
                res.json({ Status: "Could not create room" });

            }

            else res.json({ Status: "Ok" });

        });

    });

});

module.exports = router;
