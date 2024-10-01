import { Router } from 'express';
import { createTask, editTask, deleteTask, markTaskAsDone, uploadTaskPicture } from '../controllers/taskController.js';
import authMiddleware from '../middleware/authMiddleware.js';
import roleMiddleware from '../middleware/roleMiddleware.js';
import upload from '../middleware/uploadMiddleware.js';
const router = Router();

router.use(authMiddleware);

/**
 * @swagger
 * tags:
 *   name: Tasks
 *   description: API for managing tasks
 */

/**
 * @swagger
 * /tasks/create:
 *   post:
 *     summary: Create a new task
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: New Task
 *               description:
 *                 type: string
 *                 example: This is a description of the task.
 *               dueDate:
 *                 type: string
 *                 format: date-time
 *                 example: 2024-09-01T12:00:00Z
 *               assignedTo:
 *                 type: string
 *                 example: 60c72b2f9b1d8c6f9f8b4567
 *     responses:
 *       201:
 *         description: Task created successfully
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 */
router.post('/create', authMiddleware, roleMiddleware(['manager', 'admin']), createTask);

/**
 * @swagger
 * /tasks/edit/{id}:
 *   put:
 *     summary: Edit an existing task
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The task ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Updated Task Name
 *               description:
 *                 type: string
 *                 example: Updated task description.
 *               dueDate:
 *                 type: string
 *                 format: date-time
 *                 example: 2024-09-01T12:00:00Z
 *     responses:
 *       200:
 *         description: Task updated successfully
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Task not found
 */
router.put('/edit/:id', authMiddleware, roleMiddleware(['manager', 'admin']), editTask);

/**
 * @swagger
 * /tasks/delete/{id}:
 *   delete:
 *     summary: Delete a task
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The task ID
 *     responses:
 *       200:
 *         description: Task deleted successfully
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Task not found
 */
router.delete('/delete/:id', authMiddleware, roleMiddleware(['manager', 'admin']), deleteTask);

/**
 * @swagger
 * /tasks/mark-done/{id}:
 *   put:
 *     summary: Mark a task as done
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The task ID
 *     responses:
 *       200:
 *         description: Task marked as done
 *       404:
 *         description: Task not found
 */
router.put('/mark-done/:id', authMiddleware, roleMiddleware(['user']), markTaskAsDone);

/**
 * @swagger
 * /tasks/upload-picture/{id}:
 *   post:
 *     summary: Upload a picture for a task
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The task ID
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Picture uploaded successfully
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Task not found
 */
router.post('/upload-picture/:id', authMiddleware, roleMiddleware(['user']), upload.single('image'), uploadTaskPicture);


export default router;
