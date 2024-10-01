import { config } from 'dotenv';
import express from 'express';
import connectDB from './database/db.js';
import cors from 'cors';
import { dirname, join } from 'path';
import { PORT as _PORT } from './config/config.js';
import { serve, setup } from 'swagger-ui-express';
import swaggerDocument from './config/swagger.js';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

config();
const app = express();

import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import taskRoutes from './routes/taskRoutes.js';




// Middleware
app.use(cors());
app.use(express.json());

app.use('/api-docs', serve, setup(swaggerDocument));

app.use('/uploads', express.static(join(__dirname, 'uploads')));


//debugging
app.use((req, res, next) => {
    console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
    next();
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);



// Database connection
connectDB();


// Start the server
const PORT = _PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});




