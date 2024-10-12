//import User from '../models/userModel';
//import jwt from 'jsonwebtoken';
import authService from '../services/authService.js';

export const signup = async (req, res) => {
    console.log('Received signup request:', req.body);
    try {
        const { username, password, role } = req.body;

        console.log(`Attempting to sign up user: ${username} with role: ${role}`);

        const result = await authService.signup(username, password, role);

        console.log('User created:', result);

        res.status(201).json(result);
    } catch (error) {
        console.error('Signup error:', error.message);
    }
};

export const login = async (req, res) => {
    console.log('Received login request:', req.body);
    try {
        const { username, password } = req.body;

        console.log(`Attempting to log in user: ${username}`);

        // // Find user by username
        // const user = await User.findOne({ username });
        // if (!user) {
        //     return res.status(401).json({ message: 'Incorrect username or password!' });
        // }

        // // Compare the hashed password
        // const isPasswordValid = await bcrypt.compare(password, user.password);
        // if (!isPasswordValid) {
        //     return res.status(401).json({ message: 'Incorrect username or password!' });
        // }

        const result = await authService.login(username, password);
        console.log('User logged in:', result);
        res.status(200).json(result);

        // // Successful login
        // console.log('User logged in:', user);
        // res.status(200).json(user); 
    } catch (error) {
        console.error('Login error:', error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
};
