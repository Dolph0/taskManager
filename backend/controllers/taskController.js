import User from '../models/userModel.js';
import Task from '../models/taskModel.js';


//Create Task
export const createTask = async (req, res) => {
    try {
        const { title, description, dueDate, assignedTo, requiresPicture } = req.body;

        if (!title || !description || !dueDate || !assignedTo || !requiresPicture) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const user = User.findById(assignedTo);
        if (!user) {
            return res.status(404).json({ message: 'Assigned user not found ' });
        }

        const task = new Task({
            title,
            description,
            dueDate,
            assignedTo,
            requiresPicture,
            status: 'pending' //The default status is pending
        });

        await task.save(); //the task is saved in database

        res.status(201).json({ message: 'Task created successfully', task });
    }

    catch (error) {
        res.status(500).json({ message: 'Server error', error })
    }
};


//Get Task
export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).send(tasks);
    } catch (err) {
        res.status(500).send(err);
    }
};

//Edit Task
export const editTask = async (req, res) => {
    try {
        const { title, description, dueDate, requiresPicture } = req.body;
        const task = await Task.findById(req.params.id);

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        //Updating the old values
        task.title = title || task.title;
        task.description = description || task.description;
        task.dueDate = dueDate || task.dueDate;
        task.requiresPicture = requiresPicture === 'on' || requiresPicture === true;

        await task.save();

        res.status(200).json({ message: 'Task updated successfully', task });
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

//Deleet task (only for admins)

export const deleteTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        await task.remove();

        res.status(200).json({ message: 'Task deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Mark Task as done
export const markTaskAsDone = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        task.status = 'done';
        await task.save();
        res.status(200).json({ message: 'Task marked as done', task });
    }

    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};



export const uploadTaskPicture = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        if (task.requiresPicture && !req.file) {
            return res.status(400).json({ message: 'Picture is required for this task' });
        }

        task.picture = req.file.filename;
        await task.save();

        res.status(200).json({ message: 'Picture uploaded successfully', task });
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};