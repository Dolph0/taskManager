import mongoose from 'mongoose';
import User from '../models/userModel.js';
import { DATABASE_URL } from '../config/config.js';

mongoose.connect(DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


export const fetchAndDisplayUsers = async () => {
    try {
        const users = await User.find();
        console.log('Users in the collection:');
        console.log(users);
    } catch (error) {
        console.error('Error fetching users:', error);
    } finally {
        await mongoose.disconnect();
    }
};


fetchAndDisplayUsers().catch(console.error);