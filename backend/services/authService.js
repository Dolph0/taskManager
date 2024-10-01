// authService.js
import User from '../models/userModel.js';
import pkg from 'jsonwebtoken';
import bcrypt from 'bcrypt';
const { sign } = pkg;
import { JWT_SECRET } from '../config/config.js';

const signToken = (id) => {
    return sign({ id }, JWT_SECRET, { expiresIn: '7d' });
};

export async function signup(username, password, role) {
    const newUser = await User.create({ username, password, role });
    const token = signToken(newUser._id);
    return { token, user: newUser };
}

export async function login(username, password) {
    const user = await User.findOne({ username });
    if (!user) {
        throw new Error('User not found');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error('Incorrect username or password');
    }

    const token = signToken(user._id);
    return { token, user };
}


export default { signup, login };
