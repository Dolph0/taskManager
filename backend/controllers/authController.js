const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

const signToken = id => {
    return jwt.sign({ id }, config.JWT_SECRET, { expiresIn: '7d' });
};

exports.signup = async (req, res) => {
    const { username, password, role } = req.body;
    const newUser = await User.create({ username, password, role });
    const token = signToken(newUser._id);
    res.status(201).json({ token, user: newUser });
};

exports.login = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user || !(await user.correctPassword(password, user.password))) {
        return res.status(401).json({ message: 'Incorrect username or password!' });
    }

    const token = signToken(user._id);
    res.status(200).json({ token, user });
};
