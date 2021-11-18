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

router.get('/create/:name', (req, res) => {



});

module.exports = router;
