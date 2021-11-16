var express = require('express');
var bcrypt = require('bcrypt');
var router = express.Router();

/* GET home page. */
router.get('/login/:user/:password', function (req, res, next) {

    var username = req.params["user"];
    var password = req.params["password"];

    // var hashObj = new jsSHA("SHA-512", "TEXT", { numRounds: 1 });
    // hashObj.update(password);
    // var hash = hashObj.getHash("HEX");

    bcrypt.hash(password, 10, (err, hash) => {

        var data = { Username: username, Password: hash };
        res.json(data);

    });


});

module.exports = router;
