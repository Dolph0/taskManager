import { Schema, model } from 'mongoose';

const taskSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    assignedTo: { type: Schema.Types.ObjectId, ref: 'User' },
    requiresPicture: { type: Boolean, default: false },
    picture: String,
    dueDate: { type: Date, required: true },
    status: { type: String, enum: ['pending', 'done'], default: 'pending' }
});

const Task = model('Task', taskSchema);

export default Task;
