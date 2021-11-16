var express = require('express');
var bcrypt = require('bcrypt');
var router = express.Router();

// Manages logging in
router.get('/:user/:password', function (req, res, next) {

    var username = req.params["user"];
    var password = req.params["password"];

    bcrypt.hash(password, 10, (err, hash) => {

        var data = { Username: username, Password: hash };
        res.json(data);

    });


});

module.exports = router;
