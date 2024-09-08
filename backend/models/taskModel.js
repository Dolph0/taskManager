const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    imageRequired: { type: Boolean, default: false },
    imagePath: String,
    dueDate: Date,
    status: { type: String, enum: ['pending', 'done'], default: 'pending' },
    priority: { type: Boolean, default: false },
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
