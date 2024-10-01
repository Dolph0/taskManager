import Task from '../models/taskModel.js';

exports.createTask = async (taskData) => {
    const task = new Task(taskData);
    return await task.save();
};

exports.findTaskById = async (taskId) => {
    return await Task.findById(taskId);
};
