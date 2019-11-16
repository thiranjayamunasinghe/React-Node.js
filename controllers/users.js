const express = require('express')
const mongoose = require('mongoose')
const UserModel = mongoose.model('User')
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const checkAuth = require('../middleware/check-auth');


const router = express.Router();

router.post("/register", (req, res) => {

    // return res.send(req.body.password)

    var user = new UserModel();
    user.email = req.body.email;
    user.contactNo = req.body.contactNo;
    user.password = bcrypt.hashSync(req.body.password, 10);


    user.save((err, result) => {
        if (err) {
            return res.status(400).json({
                message: "Something went wrong",
            })
        } else {
            return res.status(200).json({
                message: "Succesfully registered",
                user: user
            })
        }
    });




});


// router.post("/login", (req, res) => {
//     // res.send(req.body);
//     jwt.sign({ user: req.body }, 'secret', (err, token) => {
//         console.log(token);
//         res.end();
//     })

// });



router.post('/login', (req, res) => {

    UserModel.findOne({ email: req.body.email }, function (err, user) {
        if (err) return res.status(500).send('Error on the server.');
        if (!user) return res.status(404).send('No user found.');

        var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });

        var token = jwt.sign({ user: req.body }, 'secret', {
            expiresIn: 86400 // expires in 24 hours
        });

        res.status(200).send({ auth: true, token: token });
    });

});






router.get("/list", checkAuth, (req, res) => {
    UserModel.find((err, docs) => {
        if (!err) {
            //console.log(docs);
            res.status(200).json({
                users: docs
            })
        }
        else {
            res.send("Error")
        }
    })
});


router.get('/me', function (req, res) {
    var token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

    jwt.verify(token, config.secret, function (err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

        res.status(200).send(decoded);
    });
});


module.exports = router
