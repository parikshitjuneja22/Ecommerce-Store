const User = require('../models/User');

exports.signout = (req, res) => {
    res.json({
        message: "User Signout"
    });
};

exports.signup = (req, res) => {
    const user = new User(req.body);
    user.save((err, user) => {
        if (err) {
            return res.status(400).json({
                err: err
            });
        };
        res.json(user);
    });
};