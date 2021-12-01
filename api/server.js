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

// Creates next available ID
function createID(rows) {

    var newID = 0;
    if (rows.length != 0) {

        var lastId = parseInt(rows[rows.length - 1]['id'], 16);
        newID = (lastId + 1).toString(16);

    }

    return newID;

}

// Routes

// TODO: Remove negations on requestFromApp()

// Adds the user to database
app.get('/user/add/:username@:password', (req, res) => {

    if (!requestFromApp(req)) {

        // Get ids of the current users
        var query = 'select id from users';
        database.query(query, (err, rows) => {

            // Hash password
            var passwordHash = crypto.createHash('md5').update(req.params['password']).digest('hex');

            // Adding the user to the database
            query = 'insert into users(id, username, password, dateCreated) values("' + createID(rows) + '", "' + req.params['username'] + '", "' + passwordHash + '", "' + getDateString() + '")';

            database.query(query, (err, rows) => {

                if (err) {

                    console.log(err);
                    res.sendStatus(406); // Not Acceptable

                } else {

                    res.sendStatus(200); // OK

                }

            });

        });


    } else {

        res.sendStatus(403);

    }

});

// Checks if login credentials are correct
app.get('/user/login/:username-:id@:password', (req, res) => {

    if (!requestFromApp(req)) {

        // Grabs users with specified username and id
        var query = 'select password from users where id="' + req.params['id'] + '" and username="' + req.params['username'] + '"';
        database.query(query, (err, rows) => {

            if (rows.length > 0) {

                // Comapre password hashes
                var correctPasswordHash = rows[0]['password'];
                var passwordHash = crypto.createHash('md5').update(req.params['password']).digest('hex');

                if (correctPasswordHash == passwordHash) {

                    res.sendStatus(200);

                } else {

                    res.sendStatus(406);

                }

            } else {

                res.sendStatus(406);

            }

        });

    } else {

        res.sendStatus(403);

    }

});

// Creates a new server
app.get('/server/add/:serverName', (req, res) => {

    if (!requestFromApp(req)) {

        // Get ids of the current servers
        var query = 'select id from servers';
        database.query(query, (err, rows) => {

            // Create new ID
            var newID = createID(rows);

            // Adding the server to the database
            query = 'insert into servers(id, name, dateCreated) values("' + newID + '", "' + req.params['serverName'] + '", "' + getDateString() + '")';

            database.query(query, (err, rows) => {

                if (err) {

                    console.log(err);
                    res.sendStatus(406); // Not Acceptable

                } else {

                    // Create message table for server
                    query = 'create table ' + req.params['serverName'] + newID + 'Messages(message varchar(255), dateSent date)';
                    database.query(query, (err, rows) => {


                        if (err) {

                            console.log(err);
                            res.sendStatus(406); // Not Acceptable

                        } else {

                            res.sendStatus(200); // OK

                        }

                    });


                }

            });

        });


    } else {

        res.sendStatus(403);

    }

});

// Grab all users for testing ONLY
app.get('/users', (req, res) => {

    if (!requestFromApp(req)) {

        // Grab all users
        var query = 'select * from users';
        database.query(query, (err, rows) => {

            res.json(rows);

        });

    }

});

// Grab all servers for testing ONLY
app.get('/servers', (req, res) => {

    if (!requestFromApp(req)) {

        // Grab all users
        var query = 'select * from servers';
        database.query(query, (err, rows) => {

            res.json(rows);

        });

    }

});

// Grab messages from servers for testing ONLY
app.get('/messages/:server-:id', (req, res) => {

    if (!requestFromApp(req)) {

        // Grab all users
        var query = 'select * from ' + req.params['server'] + req.params['id'] + 'Messages';
        database.query(query, (err, rows) => {

            res.json(rows);

        });

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