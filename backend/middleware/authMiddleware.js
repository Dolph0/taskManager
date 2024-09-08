const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const config = require('../config/config');

const authMiddleware = async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
        return res.status(401).json({ message: 'You are not logged in!' });
    }

    try {
        const decoded = jwt.verify(token, config.JWT_SECRET);
        req.user = await User.findById(decoded.id);

        if (!req.user) {
            return res.status(401).json({ message: 'User not found!' });
        }

        next();
    } catch (err) {
        return res.status(401).json({ message: 'Authentication failed!' });
    }
};

module.exports = authMiddleware;
