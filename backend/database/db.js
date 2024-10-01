import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import User from '../models/userModel.js';
import { DATABASE_URL } from '../config/config.js';

//Default admin user
const createAdminUser = async () => {
    const adminUsername = 'admin';
    const adminPassword = '1234';

    const existingAdmin = await User.findOne({ username: adminUsername });

    if (!existingAdmin) {
        const hashedPassword = await bcrypt.hash(adminPassword, 10);
        const newAdmin = new User({
            username: adminUsername,
            password: hashedPassword,
            role: 'admin',
        });

        await newAdmin.save();
        console.log('Admin user created successfully');
    } else {
        console.log('Admin user already exists');
    }
};

const connectDB = async () => {
    try {
        await mongoose.connect(DATABASE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Database connected successfully');
        await createAdminUser();
    } catch (error) {
        console.error('Database connection error:', error);
        process.exit(1);
    }
};

export default connectDB;
