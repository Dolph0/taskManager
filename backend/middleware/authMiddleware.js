import validateToken from '../utils/tokenUtils.js';
import User from '../models/userModel.js';

const authMiddleware = async (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    try {
        const decoded = validateToken(token);
        const user = await User.findById(decoded.id);

        if (!user) {
            return res.status(401).json({ message: 'Authorization denied, user not found' });
        }

        req.user = user;
        next();
    } catch (err) {
        res.status(401).json({ message: err.message });
    }
};

export default authMiddleware;
