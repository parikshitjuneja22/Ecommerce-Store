const User = require('../models/User');
const { check, validationResult } = require('express-validator');

exports.signout = (req, res) => {
    res.json({
        message: "User Signout"
    });
};

exports.signup = (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({
            error: errors.array()[0].msg
        });
    };

    const user = new User(req.body);
    user.save((err, user) => {
        if (err) {
            return res.status(400).json({
                err: err
            });
        };
        res.json({
            name:user.name,
            email:user.email,
            id:user._id
        });
    });
};

exports.signin = (req, res) => {
    res.json({
        message: "User Signout"
    });
};