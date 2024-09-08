const Task = require('../models/taskModel');
const User = require('../models/userModel');
const multer = require('multer');
const path = require('path');

// Handle file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage });

exports.getTasksForUser = async (req, res) => {
    const tasks = await Task.find({ assignedTo: req.user._id });
    res.status(200).json(tasks);
};

exports.uploadTaskImage = upload.single('image');

exports.markTaskAsDone = async (req, res) => {
    const task = await Task.findById(req.params.taskId);
    if (task.assignedTo.toString() !== req.user._id.toString()) {
        return res.status(403).json({ message: 'You are not assigned to this task!' });
    }
    task.status = 'done';
    await task.save();
    res.status(200).json({ message: 'Task marked as done!' });
};

exports.createTask = async (req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json(task);
};

exports.deleteTask = async (req, res) => {
    await Task.findByIdAndDelete(req.params.taskId);
    res.status(204).json({ message: 'Task deleted!' });
};
