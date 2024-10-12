import User from '../models/userModel.js';
import { hashPassword } from '../utils/hash.js';
import mongoose from 'mongoose';

export const createUser = async (req, res) => {
    try {
        const { username, password, role } = req.body;

        // Validate required fields
        if (!username || !password || !role) {
            return res.status(400).json({ message: 'All fields (username, password, role) are required.' });
        }

        const validRoles = ['user', 'manager'];
        if (!validRoles.includes(role)) {
            return res.status(400).json({ message: 'Invalid role. Role must be either "user" or "manager".' });  //admins are created directly in the backend
        }

        const hashedPassword = await hashPassword(password);

        // Create the new user
        const newUser = await User.create({ username, password: hashedPassword, role });

        res.status(201).json({
            message: 'User created successfully',
            user: {
                id: newUser._id,
                username: newUser.username,
                role: newUser.role
            }
        });
    } catch (error) {
        res.status(400).json({ message: 'Error creating user', error: error.message });
    }
};


export const deleteUser = async (req, res) => {
    try {
        const userId = req.params.userId;

        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ message: 'Invalid user ID' });
        }

        const user = await User.findByIdAndDelete(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(204).json({ message: 'User deleted!' });
    } catch (error) {
        res.status(400).json({ message: 'Error deleting user', error: error.message });
    }
};

export const editUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: 'Error updating user', error: error.message });
    }
};

export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ message: 'Error retrieving users', error: error.message });
    }
};
