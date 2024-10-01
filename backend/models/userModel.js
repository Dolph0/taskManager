import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['user', 'manager', 'admin'], default: 'user' },
    tasks: [{ type: Schema.Types.ObjectId, ref: 'Task' }]
});

const User = model('User', userSchema);


const managerSchema = new Schema({
    managedUsers: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});

const adminSchema = new Schema({
    managedManagers: [{ type: Schema.Types.ObjectId, ref: 'Manager' }]
});

const Manager = User.discriminator('Manager', managerSchema);
const Admin = User.discriminator('Admin', adminSchema);


export default User;
export { Manager, Admin };

