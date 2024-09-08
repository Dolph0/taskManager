const express = require('express');
const taskController = require('../controllers/taskController');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

const router = express.Router();

router.use(authMiddleware);

/**
 * @swagger
 * tags:
 *   name: Tasks
 *   description: API for task management
 */

/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Get tasks for the authenticated user
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of tasks assigned to the user
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     example: 60c72b2f5f3e2c001c8e4a3f
 *                   title:
 *                     type: string
 *                     example: Complete the project report
 *                   status:
 *                     type: string
 *                     example: pending
 *                   assignedTo:
 *                     type: string
 *                     example: 60c72b2f5f3e2c001c8e4a3d
 *       403:
 *         description: User is not authorized to access these tasks
 */
router.get('/', roleMiddleware(['user', 'manager', 'administrator']), taskController.getTasksForUser);

/**
 * @swagger
 * /tasks/{taskId}/done:
 *   patch:
 *     summary: Mark a task as done
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: taskId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the task to mark as done
 *     responses:
 *       200:
 *         description: Task marked as done
 *       403:
 *         description: User is not authorized to mark this task as done
 */
router.patch('/:taskId/done', roleMiddleware(['user']), taskController.markTaskAsDone);

/**
 * @swagger
 * /tasks/{taskId}/image:
 *   post:
 *     summary: Upload an image for a task
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: taskId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the task to upload an image for
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
 *         description: Image uploaded successfully
 *       403:
 *         description: User is not authorized to upload an image for this task
 */
router.post('/:taskId/image', roleMiddleware(['user']), taskController.uploadTaskImage);

/**
 * @swagger
 * /tasks:
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
 *               title:
 *                 type: string
 *                 example: Design a new logo
 *               description:
 *                 type: string
 *                 example: The logo should reflect our brand's values
 *               dueDate:
 *                 type: string
 *                 format: date-time
 *                 example: 2024-09-01T10:00:00Z
 *               assignedTo:
 *                 type: string
 *                 example: 60c72b2f5f3e2c001c8e4a3d
 *     responses:
 *       201:
 *         description: Task created successfully
 *       403:
 *         description: User is not authorized to create a task
 */
router.post('/', roleMiddleware(['manager', 'administrator']), taskController.createTask);

/**
 * @swagger
 * /tasks/{taskId}:
 *   delete:
 *     summary: Delete a task
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: taskId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the task to delete
 *     responses:
 *       204:
 *         description: Task deleted successfully
 *       403:
 *         description: User is not authorized to delete this task
 */
router.delete('/:taskId', roleMiddleware(['manager', 'administrator']), taskController.deleteTask);

module.exports = router;
